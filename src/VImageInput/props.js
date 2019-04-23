import Function_constant from '../utils/Function/constant';

export default {
	backgroundColor: String,

	clearable: {
		type: Boolean,
		default: false,
	},

	clearIcon: {
		type: [Function, String],
		default() {
			return this.$vuetify.icons.clear;
		},
	},

	clearIconStyle: [Function, Object],

	debounce: {
		type: Number,
		default: 0,
	},

	disabled: {
		type: Boolean,
		default: false,
	},

	flipHorizontallyIcon: {
		type: [Function, String],
		default: 'flip',
	},

	flipHorizontallyIconStyle: [Function, Object],

	flipVerticallyIcon: {
		type: [Function, String],
		default: 'flip',
	},

	flipVerticallyIconStyle: {
		type: [Function, Object],
		default: Function_constant({transform: 'rotate(90deg)'}),
	},

	fullHeight: {
		type: Boolean,
		default: false,
	},

	fullWidth: {
		type: Boolean,
		default: false,
	},

	hideActions: {
		type: Boolean,
		default: false,
	},

	imageFormat: {
		type: String,
		default: 'png',
	},

	imageHeight: {
		type: Number,
		default: 256,
	},

	imageQuality: {},

	imageWidth: {
		type: Number,
		default: 256,
	},

	outputScale: {
		type: Number,
		default: 1,
	},

	maxScaling: {
		type: Number,
		default: 1,
	},

	minScaling: {
		type: String,
		default: 'cover',
	},

	name: String,

	overlayBackgroundColor: {
		type: [Function, String],
		default: 'rgba(0,0,0,0.5)',
	},

	overlayBorderColor: {
		type: [Function, String],
		default: '#fff',
	},

	overlayBorderWidth: {
		type: String,
		default: '4px',
	},

	overlayPadding: {
		type: String,
		default: '50px',
	},

	readonly: {
		type: Boolean,
		default: false,
	},

	rotateClockwiseIcon: {
		type: [Function, String],
		default: 'rotate_90_degrees_ccw',
	},

	rotateClockwiseIconStyle: {
		type: [Function, Object],
		default: Function_constant({transform: 'scaleX(-1)'}),
	},

	rotateCounterclockwiseIcon: {
		type: [Function, String],
		default: 'rotate_90_degrees_ccw',
	},

	rotateCounterclockwiseIconStyle: [Function, Object],

	scalingSliderColor: [Function, String],

	uploadIcon: {
		type: [Function, String],
		default: 'cloud_upload',
	},

	uploadIconStyle: [Function, Object],

	value: String,
};
