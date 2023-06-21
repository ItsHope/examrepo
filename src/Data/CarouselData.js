export const data = [
	{
		title: '',
		description:
			'Blog 1 Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/photo1.jpg',
	},
	{
		title: '',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/photo2.jpg',
	},
	{
		title: '',
		description: 'From the vid "new normal" by Jack Stauber',
		image: './assets/photo3.jpg',
	},
	{
		title: '',
		description: 'Art from 4 years ago from Jack Staubers Tumblr',
		image: './assets/photo4.jpg',
	},
	{
		title: 'Blog1',
		description: 'We have provided services to top clients in tech industry',
		image: './assets/photo5.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};