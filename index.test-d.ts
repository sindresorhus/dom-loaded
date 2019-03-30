import {expectType} from 'tsd';
import domLoaded = require('.');

expectType<Promise<void>>(domLoaded);
