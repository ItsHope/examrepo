import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'hypnagogogic pop music',
		links: ['"Collects objects to create sound"', '"Surreal characters"', '"odd and striking facial expressions "', '"Teeth play a constant theme in Staubers work"'],
	},
	{
		title: 'Avant pop music',
		links: ['false teeth being created using resin', '"Jack Stauber is certainly not our usual synthwave sound"', '"Avant-Pop musician "', '"His work includes themes of absurdity"'],
	},
	{
		title: 'Synth pop music',
		links: ['"bizarre humor"', '"nostalgia"', '"Your vocal style is truly one of a kind"', '"Many of your lyrics border on nonsense, but somehow at the same time they can also feel very meaningful "'],
	},
	{
		title: 'Strange',
		links: ['', '', '', ''],
	},
];