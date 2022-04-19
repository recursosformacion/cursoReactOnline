
import { createStore } from 'redux';
import {appReducer} from './appReducer';


export const StoreCarro= createStore(appReducer);