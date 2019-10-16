[video-preview](../README.md) › ["stringTimestamp"](_stringtimestamp_.md)

# External module: "stringTimestamp"

## Index

### Functions

* [convertTime](_stringtimestamp_.md#const-converttime)
* [stringTimestamp](_stringtimestamp_.md#const-stringtimestamp)

## Functions

### `Const` convertTime

▸ **convertTime**(`time`: number): *object*

Defined in stringTimestamp.ts:4

convert seconds to an hours/minutes/seconds format.

**Parameters:**

Name | Type |
------ | ------ |
`time` | number |

**Returns:** *object*

* **hours**: *number* =  Math.floor(time/3600)

* **minutes**: *number* =  Math.floor((time%3600)/60)

* **seconds**: *number* =  time%60

___

### `Const` stringTimestamp

▸ **stringTimestamp**(`time`: number): *string*

Defined in stringTimestamp.ts:15

Convert seconds to a 'HH:MM:SS' string timestamp.

**Parameters:**

Name | Type |
------ | ------ |
`time` | number |

**Returns:** *string*
