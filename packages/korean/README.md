# @romanize/korean

A utility library to romanize Korean Hangul to Latin characters.

## Installation

```bash
npm install @romanize/korean
```

## Usage

```js
import { romanize } from '@romanize/korean';
romanize('안녕하세요'); // annyeonghaseyo
```

## Romanization Systems

The two main Korean romanization systems are the Revised Romanization of Korean (RR) and McCune-Reischauer (MR). The library supports both systems.

By default, the Revised Romanization is used as it is the official romanization system of South Korea (Republic of Korea). 

However, users can specify the system to use by passing in the `system` option.

```js
import { romanize } from '@romanize/korean';
romanize('안녕하세요', { system: 'MR' }); // annyonghaseyo
```

