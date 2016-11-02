
/* GPIO definition */
exports.ARTIK_A710_GPIO_GPIO0 = 128;
exports.ARTIK_A710_GPIO_GPIO1 = 129;
exports.ARTIK_A710_GPIO_GPIO2 = 130;
exports.ARTIK_A710_GPIO_GPIO3 = 46;
exports.ARTIK_A710_GPIO_GPIO4 = 14;
exports.ARTIK_A710_GPIO_GPIO5 = 41;
exports.ARTIK_A710_GPIO_GPIO6 = 25;
exports.ARTIK_A710_GPIO_GPIO7 = 0;
exports.ARTIK_A710_GPIO_GPIO8 = 26;
exports.ARTIK_A710_GPIO_GPIO9 = 27;
exports.ARTIK_A710_GPIO_AGPIO0 = 161;

/* SERIAL definition */
exports.ARTIK_A710_SERIAL = { 'UART' : { 'UART0' : 4 },
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
exports.ARTIK_A710_PWM = { 'PWMIO' : { 'XPWMIO0' : 2 },
			   'POLR'  : { 'NORMAL' : 0,
				       'INVERT' : 1 }
		       };

/* SPI definition */
exports.ARTIK_A710_SPI = { 'BUS' : { 'BUS0' : 0 },
			   'CS'  : { 'CS0' : 0,
				     'CS1' : 1 },
			   'MODE' : { 'MODE0' : 0,
				      'MODE1' : 1,
				      'MODE2' : 2,
				      'MODE3' : 3,},
			   'BITS' : { 'BITS8' : 8},
			   };

/* TIME definition */
exports.ARTIK_A710_TIME = { 'ZONE' : { 'UTC' : 0,
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
