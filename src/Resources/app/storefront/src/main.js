// Import all necessary Storefront plugins
import CartPlugin from './cart-plugin/cart-plugin.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;

PluginManager.register('CartPlugin', CartPlugin, '[cart-plugin]');
