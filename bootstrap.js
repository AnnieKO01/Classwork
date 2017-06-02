// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Intro to Owls', 		// this is the TITLE place in the class
				'https://www.hp-lexicon.org/creature/birds/owl/',	// this is the LINK place in the class
				'An Author',			// this is the AUTHOR place in the class
				'http://img4.wikia.nocookie.net/__cb20120803193332/dumbledoresarmyroleplay/images/1/1d/Xyli_Snowy_Owl.jpg',	// this is the IMAGE place in the class
				'Owls are an essential part of the wizarding community, helping the wizards to communicate.' // this is the BODY place in the class
				),

			new Post(
				'Wands',
				'https://www.pottermore.com/explore-the-story/wands',
				'An Author',
				'http://img04.deviantart.net/cd7c/i/2011/190/8/3/hp_wands__batch_1_by_vampiremage-d3lhkmi.jpg', // this is a local image in the same folder as the js script
				'The wand chooses the wizard.'
				),

			new Post(
				'Quidditch',
				'https://www.pottermore.com/collection/quidditch',
				'An Author',
				'http://harry-potter-sounds.ambient-mixer.com/images_template/d/d/5/dd56b99e865d99c0fa4f715dffd79c3f_full.jpg',
				'Quidditch is the wizarding sport that many like to participate in.'
				),

			new Post(
				'Getting Sorted',
				'https://www.pottermore.com/explore-the-story/the-sorting-hat',
				'An Author',
				'http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2014/12/sortinghat.jpg',
				'The sorting hat decides which house at Hogwarts you will be in.'
				),

			new Post(
				'The Houses of Hogwarts',
				'https://www.hp-lexicon.org/thing/hogwarts-houses',
				'An Author',
				'https://images-na.ssl-images-amazon.com/images/I/51kJhAP0XoL._SX355_.jpg',
				'There are four houses in Hogwarts, Gryffindor, Hufflepuff, Ravenclaw and Slytherin. Gryffindor are known to be brave and daring. Hufflepuff are considered kind and loyal. Ravenclaws are the intelligent and Slytherins are the cunning.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



