import { Protocol } from './protocol';
import { ProtocolMapping } from './protocol-mapping';
import { ProtocolProxyApi } from './protocol-proxy-api';
import { ProtocolSchema } from './protocol-schema';

interface Exports {
    browser: ProtocolSchema.Definition,
    js: ProtocolSchema.Definition,
}

// See json/index.js
declare let Protocols: Exports;
export default Protocols;

export {
    Protocol,
    ProtocolMapping,
    ProtocolProxyApi,
    ProtocolSchema,
};