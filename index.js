// Generated by LiveScript 1.4.0
(function(){
  var _, nssocketClient, queryProtocol, ref$, v, ValidatedModel, this$ = this;
  _ = require('underscore');
  nssocketClient = require('lweb3/transports/client/nssocket').nssocketClient;
  queryProtocol = require('lweb3/protocols/query');
  ref$ = require('validator2-extras'), v = ref$.v, ValidatedModel = ref$.ValidatedModel;
  exports.idsclient = nssocketClient.extend4000(ValidatedModel, {
    validator: {
      host: v()['default']('localhpst').String(),
      port: v()['default'](12312).Number()
    }
  }, this.on('disconnect', function(){
    return h.wait(1000, function(){
      return this$.connect();
    });
  }));
}).call(this);