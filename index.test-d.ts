import {expectType} from 'tsd-check';
import domLoaded from '.';

expectType<Promise<void>>(domLoaded);
