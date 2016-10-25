#Serial API

##Baudrates

| Baudrate | Value |
|:---------|:-----:|
| 4800     | 0     |
| 9600     | 1     |
| 14400    | 2     |
| 19200    | 3     |
| 38400    | 4     |
| 57600    | 5     |
| 115200   | 6     |

##Parity

| Parity | Value |
|:-------|:-----:|
| None   | 0     |
| Odd    | 1     |
| Even   | 2     |

##Data bits

| Data bits | Value |
|:----------|:-----:|
| 7         | 0     |
| 8         | 1     |

##Stop bits

| Stop bits | Value |
|:----------|:-----:|
| 1         | 0     |
| 2         | 1     |

##Flow control

| Parity   | Value |
|:---------|:-----:|
| None     | 0     |
| RTS/CTS  | 1     |
| XON/XOFF | 2     |

##Constructor

```javascript
var uart = new serial(Number port, String name, Number baudrate, Number parity, Number data_bits, Number stop_bits, Number flow_control);
```

**Description**

Create and configure a new instance of a serial port.

**Parameters**

 - *Number*: ID of the serial port to target. This value is defined in the board-specific definition files.
 - *String*: friendly name to give to this serial instance.
 - *Number*: baudrate among the ones defined under [Baudrates](#baudrates)
 - *Number*: parity parameter among the ones defined under [Parity](#parity)
 - *Number*: number of data bits among the ones defined under [Data bits](#data-bits)
 - *Number*: number of stop bits among the ones defined under [Stop bits](#stop-bits)
 - *Number*: flow control type among the ones defined under [Flow control](#flow-control)

**Return value**

New instance.

**Example**

```javascript
var uart = new serial(1, 'tty1', 6, 0, 1, 0, 0);
```

##request

```javascript
Number request()
```

**Description**

Request the serial port tied to the serial instance. If this one has
already been requested by some other program, the function will return
an error. When the calling program is no longer using the serial port, it should release it by calling the *release* function.

**Parameters**

None.

**Return value**

*Number*: Error code.

**Example**

See [Full example](#full-example)

##release

```javascript
Number release()
```

**Description**

Release a serial port after being previously reserved by the *request*
function.

**Parameters**

None.

**Return value**

*Number*: Error code

**Example**

See [Full example](#full-example)

##write

```javascript
Number write(Buffer data)
```

**Description**

Write data over the serial port.

**Parameters**

 - *Buffer*: buffer containing the data to send over the serial port.

**Return value**

*Number*: Error code

**Example**

```javascript
uart.write(new Buffer([0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff], 'hex'));
```

##get_port_num

```javascript
Number get_port_num()
```

**Description**

Return the port number of the serial instance.

**Parameters**

None.

**Return value**

*Number*: port number.

**Example**

```javascript
console.log('Port number: ' + uart.get_port_num());
```

##set_port_num

```javascript
set_port_num(Number port)
```

**Description**

Set the port number of the serial instance.

**Parameters**

 - *Number*: port number.

**Return value**

None.

**Example**

```javascript
uart.set_port_num(1);
```

##get_name

```javascript
String get_name()
```

**Description**

Return the friendly name of the serial instance.

**Parameters**

None.

**Return value**

*String*: friendly name.

**Example**

```javascript
console.log('Name: ' + uart.get_name());
```

##set_name

```javascript
set_name(String name)
```

**Description**

Set the friendly name of the serial instance.

**Parameters**

 - *String*: firendly name.

**Return value**

None.

**Example**

```javascript
uart.set_name('tty2');
```

##get_baudrate

```javascript
Number get_baudrate()
```

**Description**

Return the baudrate of the serial instance.

**Parameters**

None.

**Return value**

*Number*: baudrate value among the ones defined under [Baudrates](#baudrates).

**Example**

```javascript
console.log('Baudrate: ' + uart.get_baudrate());
```

##set_baudrate

```javascript
set_baudrate(Number baudrate)
```

**Description**

Set the baudrate of the serial instance.

**Parameters**

 - *Number*: baudrate value among the ones defined under [Baudrates](#baudrates).

**Return value**

None.

**Example**

```javascript
uart.set_baudrate(6);
```

##get_parity

```javascript
Number get_parity()
```

**Description**

Return the parity of the serial instance.

**Parameters**

None.

**Return value**

*Number*: parity value among the ones defined under [Parity](#parity).

**Example**

```javascript
console.log('Parity: ' + uart.get_parity());
```

##set_parity

```javascript
set_parity(Number parity)
```

**Description**

Set the parity of the serial instance.

**Parameters**

 - *Number*: baudrate value among the ones defined under [[Parity](#parity).

**Return value**

None.

**Example**

```javascript
uart.set_parity(0);
```

##get_data

```javascript
Number get_data()
```

**Description**

Return the number of data bits of the serial instance.

**Parameters**

None.

**Return value**

*Number*: data bits value among the ones defined under [Data bits](#data-bits).

**Example**

```javascript
console.log('Data bits: ' + uart.get_data());
```

##set_data

```javascript
set_data(Number data_bits)
```

**Description**

Set the number of data bits of the serial instance.

**Parameters**

 - *Number*: data bits value among the ones defined under [Data bits](#data-bits).

**Return value**

None.

**Example**

```javascript
uart.set_data(0);
```

##get_stop

```javascript
Number get_stop()
```

**Description**

Return the number of stop bits of the serial instance.

**Parameters**

None.

**Return value**

*Number*: stop bits value among the ones defined under [Stop bits](#stop-bits).

**Example**

```javascript
console.log('Stop bits: ' + uart.get_stop());
```

##set_stop

```javascript
set_stop(Number stop_bits)
```

**Description**

Set the number of stop bits of the serial instance.

**Parameters**

 - *Number*: stop bits value among the ones defined under [Stop bits](#stop-bits).
 - 
**Return value**

None.

**Example**

```javascript
uart.set_stop(0);
```

##get_flowctrl

```javascript
Number get_flowctrl()
```

**Description**

Return the flow control configuration of the serial instance.

**Parameters**

None.

**Return value**

*Number*: flow control value among the ones defined under [Flow control](#flow-control).

**Example**

```javascript
console.log('Flow control: ' + uart.get_flowctrl());
```

##set_flowctrl

```javascript
set_flowctrl(Number stop_bits)
```

**Description**

Set the flow control configuration of the serial instance.

**Parameters**

 - *Number*: flow control value among the ones defined under [Flow control](#flow-control).

**Return value**

None.

**Example**

```javascript
uart.set_flowctrl(1);
```

#Events

##read

```javascript
serial.on('read', function(String))
```

**Description**

Called every time data is received on the serial port.

**Parameters**

 - *String*: string containing the data that was received on the serial port.

**Example**

See [full example](#full-example)


#Full example

   * See [serial-test.js](/test/serial-test.js)
