// https://github.com/trufflesuite/drizzle/issues/130

import 'node-libs-react-native/globals';
import { URL, URLSearchParams } from 'whatwg-url';
import { btoa } from 'Base64';

global.URL = URL;
global.URLSearchParams = URLSearchParams;
global.btoa = btoa;
