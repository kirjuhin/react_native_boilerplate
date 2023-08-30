import combineContextProviders from './combineContextProviders';
import BoilerplateProvider from './Boilerplate/BoilerplateProvider';

const providers = [
  BoilerplateProvider,
]

export default combineContextProviders(...providers);
