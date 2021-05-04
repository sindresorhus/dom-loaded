import {expectType, expectAssignable} from 'tsd';
import domLoaded from './index.js';

expectAssignable<Promise<void>>(domLoaded);
expectType<boolean>(domLoaded.hasLoaded);
