// Node/Browser polyfills for web3@1.x

import 'node-libs-react-native/globals';
import { URL, URLSearchParams } from 'whatwg-url';
import { btoa } from 'Base64';

global.URL = URL;
global.URLSearchParams = URLSearchParams;
global.btoa = btoa;
