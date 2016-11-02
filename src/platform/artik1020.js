
/* GPIO definition */
exports.ARTIK_A10_GPIO_XEINT0 = 8;
exports.ARTIK_A10_GPIO_XEINT1 = 9;
exports.ARTIK_A10_GPIO_XEINT2 = 10;
exports.ARTIK_A10_GPIO_XEINT3 = 11;
exports.ARTIK_A10_GPIO_XEINT4 = 12;
exports.ARTIK_A10_GPIO_XEINT5 = 13;
exports.ARTIK_A10_GPIO_XEINT6 = 14;
exports.ARTIK_A10_GPIO_XEINT8 = 16;
exports.ARTIK_A10_GPIO_XEINT12 = 20;
exports.ARTIK_A10_GPIO_XEINT13 = 21;
exports.ARTIK_A10_GPIO_XEINT14 = 22;
exports.ARTIK_A10_GPIO_XEINT16 = 24;
exports.ARTIK_A10_GPIO_XEINT17 = 25;
exports.ARTIK_A10_GPIO_XEINT18 = 26;
exports.ARTIK_A10_GPIO_XEINT20 = 28;
exports.ARTIK_A10_GPIO_XEINT24 = 32;
exports.ARTIK_A10_GPIO_XEINT27 = 35;
exports.ARTIK_A10_GPIO_XEINT28 = 36;
exports.ARTIK_A10_GPIO_XGPIO0 = 217;
exports.ARTIK_A10_GPIO_XGPIO1 = 218;
exports.ARTIK_A10_GPIO_XGPIO2 = 219;
exports.ARTIK_A10_GPIO_XGPIO3 = 220;
exports.ARTIK_A10_GPIO_XGPIO6 = 221;
exports.ARTIK_A10_GPIO_XGPIO8 = 0;
exports.ARTIK_A10_GPIO_XGPIO9 = 1;
exports.ARTIK_A10_GPIO_XGPIO17 = 132;

/* SERIAL definition */
exports.ARTIK_A10_SERIAL = { 'SCOM' : { 'XSCOM1' : 0,
				       'XSCOM2' : 1,
				       'XSCOM3' : 2,
				       'XSCOM4' : 3 },
			    'BAUD' : { 'B4800' : 0,
				       'B9600' : 1,
				       'B14400' : 2,
				       'B19200' : 3,
				       'B38400' : 4,
				       'B57600' : 5,
				       'B115200' : 6 },
			    'PARITY' : { 'NONE': 7,
				         'ODD' : 8,
				         'EVEN' : 9 },
			    'DATA' : { 'BIT7' : 10,
				       'BIT8' : 11 },
			    'STOP' : { 'BIT1' : 12,
				       'BIT2' : 13 },
			    'FLOWCTRL' : { 'NONE' : 14,
					   'HARD' : 15,
					   'SOFT' : 16 }
			  };


/* PWM definition */
exports.ARTIK_A10_PWM = { 'PWMIO' : { 'XPWMIO1' : 0,
				     'XPWMIO2' : 1,
				     'XPWMIO3' : 256,
				     'XPWMIO4' : 257 },
			 'POLR' : { 'NORMAL' : 0,
				    'INVERT' : 1 }
		       };

/* SPI definition */
exports.ARTIK_A10_SPI = { 'BUS' : { 'BUS0' : 0,
									'BUS1' : 1,
									'BUS2' : 2,
									'BUS3' : 3 },
						 'CS' : { 'CS0' : 0,
								  'CS1' : 1 },
						 'MODE' : { 'MODE0' : 0,
								  	'MODE1' : 1,
								  	'MODE2' : 2,
								  	'MODE3' : 3,},
						 'BITS' : { 'BITS8' : 8},
			  			};

/* TIME definition */
exports.ARTIK_A10_TIME = { 'ZONE' : { 'UTC' : 0,
				     'GMT1' : 1,
				     'GMT2' : 2,
				     'GMT3' : 3,
				     'GMT4' : 4,
				     'GMT5' : 5,
				     'GMT6' : 6,
				     'GMT7' : 7,
				     'GMT8' : 8,
				     'GMT9' : 9,
				     'GMT10' : 10,
				     'GMT11' : 11,
				     'GMT12' : 12 },
			  'DFORMAT_DATE' : 'h:m:s:S-d-D/M/Y\0'
		       };

/* SENSOR definition */
exports.ARTIK_A10_SENSOR = { 'DEVICE' : { 'ACCELEROMETER' : 1,
					 'HUMIDITY' : 4,
					 'LIGHT' : 8,
					 'TEMPERATURE' : 16,
					 'PROXIMITY' : 32,
					 'NONE' : 0,
				       }
			  };
