/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(requestTimeout) { // eslint-disable-line no-unused-vars
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "ba8e69c36650bfed2c04"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/wp-content/themes/beautysalon/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(2)(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************!*\
  !*** ../node_modules/html-entities/lib/surrogate-pairs.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {
    return String.fromCharCode(Math.floor((astralCodePoint - 0x10000) / 0x400) + 0xD800, (astralCodePoint - 0x10000) % 0x400 + 0xDC00);
};
exports.getCodePoint = String.prototype.codePointAt ?
    function (input, position) {
        return input.codePointAt(position);
    } :
    function (input, position) {
        return (input.charCodeAt(position) - 0xD800) * 0x400
            + input.charCodeAt(position + 1) - 0xDC00 + 0x10000;
    };
exports.highSurrogateFrom = 0xD800;
exports.highSurrogateTo = 0xDBFF;


/***/ }),
/* 1 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js!../node_modules/css-loader??ref--4-3!../node_modules/postcss-loader/lib??ref--4-4!../node_modules/resolve-url-loader??ref--4-5!../node_modules/sass-loader/lib/loader.js??ref--4-6!../node_modules/import-glob!./styles/main.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 20)(true);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap);", ""]);

// module
exports.push([module.i, "/* line 7, stdin */\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/* line 12, stdin */\n\nbody {\n  width: 100%;\n  min-width: 240px;\n  height: auto;\n  background-color: #fff;\n  margin: 0 auto;\n  font-family: 'Playfair Display', serif;\n}\n\n/* line 21, stdin */\n\na {\n  text-decoration: none;\n  color: #000;\n}\n\n/* line 25, stdin */\n\na:hover {\n  text-decoration: none;\n}\n\n/* line 30, stdin */\n\nli {\n  list-style-type: none;\n}\n\n/* line 34, stdin */\n\nh1 {\n  font-size: 36px;\n}\n\n/* line 38, stdin */\n\nh2 {\n  font-size: 30px;\n}\n\n/* line 42, stdin */\n\nh3 {\n  font-size: 26px;\n}\n\n/* line 46, stdin */\n\nh4 {\n  font-size: 20px;\n}\n\n/* line 50, stdin */\n\nh5 {\n  font-size: 14px;\n}\n\n/* line 54, stdin */\n\np {\n  font-size: 14px;\n}\n\n/* line 58, stdin */\n\nheader {\n  max-width: 1200px;\n  height: auto;\n  max-height: 163px;\n  margin: 0 auto;\n}\n\n/* line 64, stdin */\n\nheader .header {\n  padding: 68px 5.6% 72px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n/* line 70, stdin */\n\nheader .header__icon {\n  font-family: 'Inconsolata', monospace;\n  font-weight: 400;\n  line-height: 24px;\n  text-transform: uppercase;\n  letter-spacing: 6px;\n  max-height: 23px;\n}\n\n/* line 79, stdin */\n\nheader .header_menu {\n  font-weight: 400;\n  line-height: 24px;\n  text-transform: uppercase;\n  max-width: 585px;\n  width: 100%;\n  max-height: 11px;\n  margin-top: -13px;\n  color: #626262;\n}\n\n/* line 89, stdin */\n\nheader .header_menu ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n/* line 94, stdin */\n\nheader .header_menu ul li {\n  padding-left: 2%;\n}\n\n/* line 98, stdin */\n\nheader .header_menu ul a:hover {\n  color: #929292;\n}\n\n/* line 106, stdin */\n\nsection {\n  width: 100%;\n}\n\n/* line 109, stdin */\n\nsection h2 {\n  padding-top: 28px;\n  color: #626262;\n  font-weight: 400;\n}\n\n/* line 115, stdin */\n\nsection h5 {\n  font-family: 'Ubuntu', sans-serif;\n  color: #b4ad9e;\n  text-transform: uppercase;\n  font-weight: 300;\n}\n\n/* line 122, stdin */\n\nsection p {\n  padding-top: 34px;\n  color: #626262;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n/* line 129, stdin */\n\nsection .first-post {\n  max-width: 1061px;\n  max-height: 989px;\n  margin: 0 auto;\n}\n\n/* line 134, stdin */\n\nsection .first-post__img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #f2f2f2;\n}\n\n/* line 140, stdin */\n\nsection .first-post__img img {\n  width: 100%;\n  height: auto;\n}\n\n/* line 146, stdin */\n\nsection .first-post-content {\n  width: 90%;\n  max-width: 893px;\n  height: auto;\n  margin: 0 auto;\n  padding-top: 99px;\n  padding-bottom: 40px;\n}\n\n/* line 154, stdin */\n\nsection .first-post-content h2 {\n  margin-left: -3px;\n  margin-top: -4px;\n}\n\n/* line 159, stdin */\n\nsection .first-post-content p {\n  margin-top: -9px;\n  margin-left: -3px;\n}\n\n/* line 164, stdin */\n\nsection .first-post-content h5 {\n  max-height: 11px;\n  margin-top: -4px;\n  margin-left: -3px;\n}\n\n/* line 170, stdin */\n\nsection .first-post-content .btnLoadMore {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n/* line 176, stdin */\n\nsection .first-post-content label + h5 {\n  padding-top: 52px;\n  margin-top: -6px;\n}\n\n/* line 183, stdin */\n\nsection .second-post {\n  max-width: 960px;\n  height: auto;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-top: 102px;\n}\n\n/* line 192, stdin */\n\nsection .second-post-box {\n  max-width: 43.75%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0 3.125% 105px;\n  text-align: left;\n}\n\n/* line 200, stdin */\n\nsection .second-post-box-content .btnLoadMore {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n/* line 206, stdin */\n\nsection .second-post-box-content .content {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n/* line 213, stdin */\n\nsection .second-post-box-content .btnLoadMore ~ label::before {\n  content: \"Load More\";\n  padding-top: 50px;\n}\n\n/* line 218, stdin */\n\nsection .second-post-box-content .btnLoadMore:checked ~ label::before {\n  content: \"Load Less\";\n}\n\n/* line 222, stdin */\n\nsection .second-post-box-content .btnLoadMore:checked + .content {\n  -webkit-line-clamp: unset;\n}\n\n/* line 226, stdin */\n\nsection .second-post-box-content .btn {\n  color: #626262;\n  background-color: inherit;\n  padding: 4px 10px;\n}\n\n/* line 231, stdin */\n\nsection .second-post-box-content .btn:hover {\n  background-color: #626262;\n  color: #fff;\n}\n\n/* line 237, stdin */\n\nsection .second-post-box-content h5 {\n  max-height: 11px;\n  margin-top: -7px;\n}\n\n/* line 242, stdin */\n\nsection .second-post-box-content h2 {\n  max-height: 30px;\n  margin-top: -4px;\n}\n\n/* line 247, stdin */\n\nsection .second-post-box-content p {\n  margin-top: 3px;\n}\n\n/* line 252, stdin */\n\nsection .second-post-box__img {\n  width: 100%;\n  height: auto;\n  padding-bottom: 32px;\n}\n\n/* line 257, stdin */\n\nsection .second-post-box__img img {\n  width: 100%;\n  height: auto;\n}\n\n/* line 264, stdin */\n\nsection .second-post .btn_loadMore {\n  margin: 35px auto 98px;\n}\n\n/* line 267, stdin */\n\nsection .second-post .btn_loadMore button {\n  padding: 21px 34px;\n  min-width: 164px;\n  min-height: 60px;\n  color: #626262;\n  background-color: inherit;\n  border: 1px solid #626262;\n}\n\n/* line 275, stdin */\n\nsection .second-post .btn_loadMore button:hover {\n  background-color: #eee;\n  cursor: pointer;\n}\n\n/* line 280, stdin */\n\nsection .second-post .btn_loadMore button h4 {\n  font-weight: 400;\n  margin: 0 auto;\n}\n\n/* line 288, stdin */\n\nsection .newSletter {\n  width: 100%;\n  height: auto;\n  background-color: #f0f0f0;\n  margin-top: -9px;\n  max-height: 287px;\n}\n\n/* line 295, stdin */\n\nsection .newSletter_content {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 73px 0 74px;\n}\n\n/* line 300, stdin */\n\nsection .newSletter_content h2 {\n  color: #333;\n  font-weight: 400;\n  text-align: center;\n  letter-spacing: 0.75px;\n  padding-bottom: 69px;\n  padding-top: 0;\n  max-height: 30px;\n  margin-top: -8px;\n}\n\n/* line 311, stdin */\n\nsection .newSletter_content form {\n  border-bottom: 1px solid #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 4px;\n}\n\n/* line 318, stdin */\n\nsection .newSletter_content form input {\n  background-color: inherit;\n  width: 90.75%;\n  border: none;\n  color: #626262;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  text-align: left;\n  margin: 0;\n  padding: 10px 0;\n}\n\n/* line 330, stdin */\n\nsection .newSletter_content form input:active,\nsection .newSletter_content form input:focus {\n  border: none;\n  outline: none;\n}\n\n/* line 337, stdin */\n\nsection .newSletter_content form button {\n  background-color: inherit;\n  border: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 9px;\n}\n\n/* line 345, stdin */\n\nsection .newSletter_content form button:hover {\n  cursor: pointer;\n}\n\n/* line 349, stdin */\n\nsection .newSletter_content form button img {\n  width: 95%;\n  height: auto;\n}\n\n/* line 353, stdin */\n\nsection .newSletter_content form button img:hover {\n  width: 100%;\n}\n\n/* line 363, stdin */\n\nfooter {\n  width: 100%;\n  background-color: #f0f0f0;\n}\n\n/* line 367, stdin */\n\nfooter .footer {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  max-height: 97px;\n}\n\n/* line 373, stdin */\n\nfooter .footer-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 40px 5.9% 45px 12.5%;\n}\n\n/* line 379, stdin */\n\nfooter .footer-content_left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-top: -18px;\n}\n\n/* line 384, stdin */\n\nfooter .footer-content_left p {\n  padding-right: 17px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #000;\n  text-align: left;\n  max-height: 12px;\n}\n\n/* line 394, stdin */\n\nfooter .footer-content_right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-top: -6px;\n}\n\n/* line 399, stdin */\n\nfooter .footer-content_right p {\n  padding-left: 17px;\n  padding-right: 4px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #000;\n  text-align: left;\n  max-height: 12px;\n}\n\n/* line 409, stdin */\n\nfooter .footer-content_right img {\n  padding-left: 20px;\n  color: #626262;\n  max-height: 12px;\n}\n\n@media screen and (max-width: 934px) {\n  /* line 422, stdin */\n\n  section .second-post-box {\n    max-width: 40%;\n    padding: 0 5% 122px;\n  }\n\n  /* line 427, stdin */\n\n  section .second-post .btn_loadMore {\n    margin: 0 auto 100px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  /* line 436, stdin */\n\n  header .header {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  /* line 440, stdin */\n\n  header .header__icon {\n    text-align: center;\n    padding: 15px;\n  }\n\n  /* line 445, stdin */\n\n  header .header_menu {\n    max-width: 100%;\n  }\n\n  /* line 449, stdin */\n\n  header .header_menu ul li {\n    padding-left: 0;\n  }\n\n  /* line 458, stdin */\n\n  section .first-post {\n    width: 90%;\n  }\n\n  /* line 461, stdin */\n\n  section .first-post-content {\n    padding-top: 70px;\n    padding-bottom: 30px;\n  }\n\n  /* line 468, stdin */\n\n  section .second-post-box {\n    max-width: 90%;\n  }\n\n  /* line 475, stdin */\n\n  footer .footer-content {\n    padding: 40px 6% 45px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  /* line 482, stdin */\n\n  h5 {\n    font-size: 13px;\n  }\n\n  /* line 487, stdin */\n\n  header .header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 40px 10%;\n  }\n\n  /* line 492, stdin */\n\n  header .header__icon {\n    text-align: left;\n    padding: 0;\n  }\n\n  /* line 496, stdin */\n\n  header .header__icon h2 {\n    font-size: 26px;\n  }\n\n  /* line 501, stdin */\n\n  header .header_menu {\n    width: auto;\n    padding-left: 10px;\n  }\n\n  /* line 505, stdin */\n\n  header .header_menu ul {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  /* line 514, stdin */\n\n  section .first-post-content {\n    padding-top: 45px;\n    padding-bottom: 25px;\n  }\n\n  /* line 518, stdin */\n\n  section .first-post-content label + h5 {\n    padding-top: 40px;\n  }\n\n  /* line 522, stdin */\n\n  section .first-post-content .content {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  /* line 529, stdin */\n\n  section .first-post-content .btnLoadMore ~ label::before {\n    content: \"Load More\";\n  }\n\n  /* line 533, stdin */\n\n  section .first-post-content .btnLoadMore:checked ~ label::before {\n    content: \"Load Less\";\n  }\n\n  /* line 537, stdin */\n\n  section .first-post-content .btnLoadMore:checked + .content {\n    -webkit-line-clamp: unset;\n  }\n\n  /* line 541, stdin */\n\n  section .first-post-content .btn {\n    color: #626262;\n    background-color: inherit;\n    padding: 4px 10px;\n  }\n\n  /* line 546, stdin */\n\n  section .first-post-content .btn:hover {\n    background-color: #626262;\n    color: #fff;\n  }\n\n  /* line 554, stdin */\n\n  section .second-post {\n    padding-top: 45px;\n  }\n\n  /* line 557, stdin */\n\n  section .second-post-box {\n    padding-bottom: 45px;\n  }\n\n  /* line 561, stdin */\n\n  section .second-post .btn_loadMore {\n    margin: 0 auto 60px;\n  }\n\n  /* line 564, stdin */\n\n  section .second-post .btn_loadMore button {\n    padding: 14px 20px;\n  }\n\n  /* line 570, stdin */\n\n  section h2 {\n    font-size: 26px;\n  }\n\n  /* line 574, stdin */\n\n  section p {\n    font-size: 13px;\n  }\n\n  /* line 579, stdin */\n\n  section .newSletter_content {\n    max-width: 80%;\n    padding: 40px 0;\n  }\n\n  /* line 583, stdin */\n\n  section .newSletter_content h2 {\n    padding-bottom: 20px;\n    font-size: 16px;\n  }\n\n  /* line 593, stdin */\n\n  footer .footer-content_left {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  /* line 597, stdin */\n\n  footer .footer-content_right {\n    /* foo */\n  }\n}\n\n@media screen and (max-width: 380px) {\n  /* line 606, stdin */\n\n  footer .footer-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n\n  /* line 610, stdin */\n\n  footer .footer-content_left {\n    padding-bottom: 20px;\n  }\n\n  /* line 613, stdin */\n\n  footer .footer-content_left p {\n    padding-right: 0;\n  }\n\n  /* line 619, stdin */\n\n  footer .footer-content_right p {\n    padding-left: 0;\n  }\n}\n\n", "", {"version":3,"sources":["/var/www/html/beauty.loc/wp-content/themes/beautysalon/assets/styles/main.scss","/var/www/html/beauty.loc/wp-content/themes/beautysalon/assets/styles/assets/styles/main.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap\");\n/* line 7, stdin */\n* {\n  margin: 0;\n  padding: 0; }\n\n/* line 12, stdin */\nbody {\n  width: 100%;\n  min-width: 240px;\n  height: auto;\n  background-color: #fff;\n  margin: 0 auto;\n  font-family: 'Playfair Display', serif; }\n\n/* line 21, stdin */\na {\n  text-decoration: none;\n  color: #000; }\n  /* line 25, stdin */\n  a:hover {\n    text-decoration: none; }\n\n/* line 30, stdin */\nli {\n  list-style-type: none; }\n\n/* line 34, stdin */\nh1 {\n  font-size: 36px; }\n\n/* line 38, stdin */\nh2 {\n  font-size: 30px; }\n\n/* line 42, stdin */\nh3 {\n  font-size: 26px; }\n\n/* line 46, stdin */\nh4 {\n  font-size: 20px; }\n\n/* line 50, stdin */\nh5 {\n  font-size: 14px; }\n\n/* line 54, stdin */\np {\n  font-size: 14px; }\n\n/* line 58, stdin */\nheader {\n  max-width: 1200px;\n  height: auto;\n  max-height: 163px;\n  margin: 0 auto; }\n  /* line 64, stdin */\n  header .header {\n    padding: 68px 5.6% 72px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    /* line 70, stdin */\n    header .header__icon {\n      font-family: 'Inconsolata', monospace;\n      font-weight: 400;\n      line-height: 24px;\n      text-transform: uppercase;\n      letter-spacing: 6px;\n      max-height: 23px; }\n    /* line 79, stdin */\n    header .header_menu {\n      font-weight: 400;\n      line-height: 24px;\n      text-transform: uppercase;\n      max-width: 585px;\n      width: 100%;\n      max-height: 11px;\n      margin-top: -13px;\n      color: #626262; }\n      /* line 89, stdin */\n      header .header_menu ul {\n        display: flex;\n        justify-content: space-between; }\n        /* line 94, stdin */\n        header .header_menu ul li {\n          padding-left: 2%; }\n        /* line 98, stdin */\n        header .header_menu ul a:hover {\n          color: #929292; }\n\n/* line 106, stdin */\nsection {\n  width: 100%; }\n  /* line 109, stdin */\n  section h2 {\n    padding-top: 28px;\n    color: #626262;\n    font-weight: 400; }\n  /* line 115, stdin */\n  section h5 {\n    font-family: 'Ubuntu', sans-serif;\n    color: #b4ad9e;\n    text-transform: uppercase;\n    font-weight: 300; }\n  /* line 122, stdin */\n  section p {\n    padding-top: 34px;\n    color: #626262;\n    font-weight: 400;\n    line-height: 24px; }\n  /* line 129, stdin */\n  section .first-post {\n    max-width: 1061px;\n    max-height: 989px;\n    margin: 0 auto; }\n    /* line 134, stdin */\n    section .first-post__img {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: #f2f2f2; }\n      /* line 140, stdin */\n      section .first-post__img img {\n        width: 100%;\n        height: auto; }\n    /* line 146, stdin */\n    section .first-post-content {\n      width: 90%;\n      max-width: 893px;\n      height: auto;\n      margin: 0 auto;\n      padding-top: 99px;\n      padding-bottom: 40px; }\n      /* line 154, stdin */\n      section .first-post-content h2 {\n        margin-left: -3px;\n        margin-top: -4px; }\n      /* line 159, stdin */\n      section .first-post-content p {\n        margin-top: -9px;\n        margin-left: -3px; }\n      /* line 164, stdin */\n      section .first-post-content h5 {\n        max-height: 11px;\n        margin-top: -4px;\n        margin-left: -3px; }\n      /* line 170, stdin */\n      section .first-post-content .btnLoadMore {\n        opacity: 0;\n        position: absolute;\n        pointer-events: none; }\n      /* line 176, stdin */\n      section .first-post-content label + h5 {\n        padding-top: 52px;\n        margin-top: -6px; }\n  /* line 183, stdin */\n  section .second-post {\n    max-width: 960px;\n    height: auto;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding-top: 102px; }\n    /* line 192, stdin */\n    section .second-post-box {\n      max-width: 43.75%;\n      display: flex;\n      flex-direction: column;\n      padding: 0 3.125% 105px;\n      text-align: left; }\n      /* line 200, stdin */\n      section .second-post-box-content .btnLoadMore {\n        opacity: 0;\n        position: absolute;\n        pointer-events: none; }\n      /* line 206, stdin */\n      section .second-post-box-content .content {\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        overflow: hidden; }\n      /* line 213, stdin */\n      section .second-post-box-content .btnLoadMore ~ label::before {\n        content: \"Load More\";\n        padding-top: 50px; }\n      /* line 218, stdin */\n      section .second-post-box-content .btnLoadMore:checked ~ label::before {\n        content: \"Load Less\"; }\n      /* line 222, stdin */\n      section .second-post-box-content .btnLoadMore:checked + .content {\n        -webkit-line-clamp: unset; }\n      /* line 226, stdin */\n      section .second-post-box-content .btn {\n        color: #626262;\n        background-color: inherit;\n        padding: 4px 10px; }\n        /* line 231, stdin */\n        section .second-post-box-content .btn:hover {\n          background-color: #626262;\n          color: #fff; }\n      /* line 237, stdin */\n      section .second-post-box-content h5 {\n        max-height: 11px;\n        margin-top: -7px; }\n      /* line 242, stdin */\n      section .second-post-box-content h2 {\n        max-height: 30px;\n        margin-top: -4px; }\n      /* line 247, stdin */\n      section .second-post-box-content p {\n        margin-top: 3px; }\n      /* line 252, stdin */\n      section .second-post-box__img {\n        width: 100%;\n        height: auto;\n        padding-bottom: 32px; }\n        /* line 257, stdin */\n        section .second-post-box__img img {\n          width: 100%;\n          height: auto; }\n    /* line 264, stdin */\n    section .second-post .btn_loadMore {\n      margin: 35px auto 98px; }\n      /* line 267, stdin */\n      section .second-post .btn_loadMore button {\n        padding: 21px 34px;\n        min-width: 164px;\n        min-height: 60px;\n        color: #626262;\n        background-color: inherit;\n        border: 1px solid #626262; }\n        /* line 275, stdin */\n        section .second-post .btn_loadMore button:hover {\n          background-color: #eee;\n          cursor: pointer; }\n        /* line 280, stdin */\n        section .second-post .btn_loadMore button h4 {\n          font-weight: 400;\n          margin: 0 auto; }\n  /* line 288, stdin */\n  section .newSletter {\n    width: 100%;\n    height: auto;\n    background-color: #f0f0f0;\n    margin-top: -9px;\n    max-height: 287px; }\n    /* line 295, stdin */\n    section .newSletter_content {\n      max-width: 400px;\n      margin: 0 auto;\n      padding: 73px 0 74px; }\n      /* line 300, stdin */\n      section .newSletter_content h2 {\n        color: #333;\n        font-weight: 400;\n        text-align: center;\n        letter-spacing: 0.75px;\n        padding-bottom: 69px;\n        padding-top: 0;\n        max-height: 30px;\n        margin-top: -8px; }\n      /* line 311, stdin */\n      section .newSletter_content form {\n        border-bottom: 1px solid #000;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 4px; }\n        /* line 318, stdin */\n        section .newSletter_content form input {\n          background-color: inherit;\n          width: 90.75%;\n          border: none;\n          color: #626262;\n          font-size: 14px;\n          font-weight: 400;\n          line-height: 24px;\n          text-align: left;\n          margin: 0;\n          padding: 10px 0; }\n          /* line 330, stdin */\n          section .newSletter_content form input:active, section .newSletter_content form input:focus {\n            border: none;\n            outline: none; }\n        /* line 337, stdin */\n        section .newSletter_content form button {\n          background-color: inherit;\n          border: none;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin-top: 9px; }\n          /* line 345, stdin */\n          section .newSletter_content form button:hover {\n            cursor: pointer; }\n          /* line 349, stdin */\n          section .newSletter_content form button img {\n            width: 95%;\n            height: auto; }\n            /* line 353, stdin */\n            section .newSletter_content form button img:hover {\n              width: 100%; }\n\n/* line 363, stdin */\nfooter {\n  width: 100%;\n  background-color: #f0f0f0; }\n  /* line 367, stdin */\n  footer .footer {\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n    max-height: 97px; }\n    /* line 373, stdin */\n    footer .footer-content {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 40px 5.9% 45px 12.5%; }\n      /* line 379, stdin */\n      footer .footer-content_left {\n        display: flex;\n        justify-content: flex-start;\n        margin-top: -18px; }\n        /* line 384, stdin */\n        footer .footer-content_left p {\n          padding-right: 17px;\n          font-weight: 400;\n          line-height: 24px;\n          color: #000;\n          text-align: left;\n          max-height: 12px; }\n      /* line 394, stdin */\n      footer .footer-content_right {\n        display: flex;\n        justify-content: flex-end;\n        margin-top: -6px; }\n        /* line 399, stdin */\n        footer .footer-content_right p {\n          padding-left: 17px;\n          padding-right: 4px;\n          font-weight: 400;\n          line-height: 24px;\n          color: #000;\n          text-align: left;\n          max-height: 12px; }\n        /* line 409, stdin */\n        footer .footer-content_right img {\n          padding-left: 20px;\n          color: #626262;\n          max-height: 12px; }\n\n@media screen and (max-width: 934px) {\n  /* line 422, stdin */\n  section .second-post-box {\n    max-width: 40%;\n    padding: 0 5% 122px; }\n  /* line 427, stdin */\n  section .second-post .btn_loadMore {\n    margin: 0 auto 100px; } }\n\n@media screen and (max-width: 768px) {\n  /* line 436, stdin */\n  header .header {\n    justify-content: center;\n    flex-direction: column; }\n    /* line 440, stdin */\n    header .header__icon {\n      text-align: center;\n      padding: 15px; }\n    /* line 445, stdin */\n    header .header_menu {\n      max-width: 100%; }\n      /* line 449, stdin */\n      header .header_menu ul li {\n        padding-left: 0; }\n  /* line 458, stdin */\n  section .first-post {\n    width: 90%; }\n    /* line 461, stdin */\n    section .first-post-content {\n      padding-top: 70px;\n      padding-bottom: 30px; }\n  /* line 468, stdin */\n  section .second-post-box {\n    max-width: 90%; }\n  /* line 475, stdin */\n  footer .footer-content {\n    padding: 40px 6% 45px; } }\n\n@media screen and (max-width: 450px) {\n  /* line 482, stdin */\n  h5 {\n    font-size: 13px; }\n  /* line 487, stdin */\n  header .header {\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 40px 10%; }\n    /* line 492, stdin */\n    header .header__icon {\n      text-align: left;\n      padding: 0; }\n      /* line 496, stdin */\n      header .header__icon h2 {\n        font-size: 26px; }\n    /* line 501, stdin */\n    header .header_menu {\n      width: auto;\n      padding-left: 10px; }\n      /* line 505, stdin */\n      header .header_menu ul {\n        flex-direction: column; }\n  /* line 514, stdin */\n  section .first-post-content {\n    padding-top: 45px;\n    padding-bottom: 25px; }\n    /* line 518, stdin */\n    section .first-post-content label + h5 {\n      padding-top: 40px; }\n    /* line 522, stdin */\n    section .first-post-content .content {\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      overflow: hidden; }\n    /* line 529, stdin */\n    section .first-post-content .btnLoadMore ~ label::before {\n      content: \"Load More\"; }\n    /* line 533, stdin */\n    section .first-post-content .btnLoadMore:checked ~ label::before {\n      content: \"Load Less\"; }\n    /* line 537, stdin */\n    section .first-post-content .btnLoadMore:checked + .content {\n      -webkit-line-clamp: unset; }\n    /* line 541, stdin */\n    section .first-post-content .btn {\n      color: #626262;\n      background-color: inherit;\n      padding: 4px 10px; }\n      /* line 546, stdin */\n      section .first-post-content .btn:hover {\n        background-color: #626262;\n        color: #fff; }\n  /* line 554, stdin */\n  section .second-post {\n    padding-top: 45px; }\n    /* line 557, stdin */\n    section .second-post-box {\n      padding-bottom: 45px; }\n    /* line 561, stdin */\n    section .second-post .btn_loadMore {\n      margin: 0 auto 60px; }\n      /* line 564, stdin */\n      section .second-post .btn_loadMore button {\n        padding: 14px 20px; }\n  /* line 570, stdin */\n  section h2 {\n    font-size: 26px; }\n  /* line 574, stdin */\n  section p {\n    font-size: 13px; }\n  /* line 579, stdin */\n  section .newSletter_content {\n    max-width: 80%;\n    padding: 40px 0; }\n    /* line 583, stdin */\n    section .newSletter_content h2 {\n      padding-bottom: 20px;\n      font-size: 16px; }\n  /* line 593, stdin */\n  footer .footer-content_left {\n    flex-direction: column; }\n  /* line 597, stdin */\n  footer .footer-content_right {\n    /* foo */ } }\n\n@media screen and (max-width: 380px) {\n  /* line 606, stdin */\n  footer .footer-content {\n    flex-direction: column;\n    justify-content: center; }\n    /* line 610, stdin */\n    footer .footer-content_left {\n      padding-bottom: 20px; }\n      /* line 613, stdin */\n      footer .footer-content_left p {\n        padding-right: 0; }\n    /* line 619, stdin */\n    footer .footer-content_right p {\n      padding-left: 0; } }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgXCJmaWxlXCI7XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmhlYWRlciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDE2M3B4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA2OHB4IDUuNiUgNzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9faWNvbiB7XG4gICAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XG4gICAgICBtYXgtaGVpZ2h0OiAyM3B4O1xuICAgIH1cblxuICAgICZfbWVudSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWF4LXdpZHRoOiA1ODVweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTFweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xM3B4O1xuICAgICAgY29sb3I6ICM2MjYyNjI7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzkyOTI5MjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaDIge1xuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgIGNvbG9yOiAjNjI2MjYyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjYjRhZDllO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gIHAge1xuICAgIHBhZGRpbmctdG9wOiAzNHB4O1xuICAgIGNvbG9yOiAjNjI2MjYyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cblxuICAuZmlyc3QtcG9zdCB7XG4gICAgbWF4LXdpZHRoOiAxMDYxcHg7XG4gICAgbWF4LWhlaWdodDogOTg5cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAmX19pbWcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDg5M3B4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nLXRvcDogOTlweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gICAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTlweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICB9XG5cbiAgICAgIGg1IHtcbiAgICAgICAgbWF4LWhlaWdodDogMTFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICB9XG5cbiAgICAgIC5idG5Mb2FkTW9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGxhYmVsICsgaDUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2Vjb25kLXBvc3Qge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMDJweDtcblxuICAgICYtYm94IHtcbiAgICAgIG1heC13aWR0aDogNDMuNzUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAwIDMuMTI1JSAxMDVweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICYtY29udGVudCB7XG4gICAgICAgIC5idG5Mb2FkTW9yZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG5Mb2FkTW9yZSB+IGxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiTG9hZCBNb3JlXCI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuTG9hZE1vcmU6Y2hlY2tlZCB+IGxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiTG9hZCBMZXNzXCI7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuTG9hZE1vcmU6Y2hlY2tlZCArIC5jb250ZW50IHtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHVuc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgY29sb3I6ICM2MjYyNjI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNjI2MjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGg1IHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX2ltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bl9sb2FkTW9yZSB7XG4gICAgICBtYXJnaW46IDM1cHggYXV0byA5OHB4O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAyMXB4IDM0cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTY0cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIGNvbG9yOiAjNjI2MjYyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjI2MjYyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmV3U2xldHRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbiAgICBtYXgtaGVpZ2h0OiAyODdweDtcblxuICAgICZfY29udGVudCB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiA3M3B4IDAgNzRweDtcblxuICAgICAgaDIge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjlweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIGZvcm0ge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgd2lkdGg6IDkwLjc1JTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICM2MjYyNjI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDlweDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXG4gIC5mb290ZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDk3cHg7XG5cbiAgICAmLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4IDUuOSUgNDVweCAxMi41JTtcblxuICAgICAgJl9sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMThweDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfcmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBjb2xvcjogIzYyNjI2MjtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzNHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIC5zZWNvbmQtcG9zdCB7XG4gICAgICAmLWJveCB7XG4gICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDUlIDEyMnB4O1xuICAgICAgfVxuXG4gICAgICAuYnRuX2xvYWRNb3JlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlciB7XG4gICAgLmhlYWRlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICZfX2ljb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgICZfbWVudSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIC5maXJzdC1wb3N0IHtcbiAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2Vjb25kLXBvc3Qge1xuICAgICAgJi1ib3gge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb290ZXIgLmZvb3RlciB7XG4gICAgJi1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDQwcHggNiUgNDVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgLmhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogNDBweCAxMCU7XG5cbiAgICAgICZfX2ljb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9tZW51IHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIC5maXJzdC1wb3N0IHtcbiAgICAgICYtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcblxuICAgICAgICBsYWJlbCArIGg1IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bkxvYWRNb3JlIH4gbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJMb2FkIE1vcmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG5Mb2FkTW9yZTpjaGVja2VkIH4gbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJMb2FkIExlc3NcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG5Mb2FkTW9yZTpjaGVja2VkICsgLmNvbnRlbnQge1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogdW5zZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBjb2xvcjogIzYyNjI2MjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2MjYyO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlY29uZC1wb3N0IHtcbiAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuXG4gICAgICAmLWJveCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgICAgfVxuXG4gICAgICAuYnRuX2xvYWRNb3JlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICAubmV3U2xldHRlciB7XG4gICAgICAmX2NvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb290ZXIgLmZvb3RlciB7XG4gICAgJi1jb250ZW50IHtcbiAgICAgICZfbGVmdCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgICZfcmlnaHQge1xuICAgICAgICAvKiBmb28gKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgZm9vdGVyIC5mb290ZXIge1xuICAgICYtY29udGVudCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICZfbGVmdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9yaWdodCB7XG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxDQUFDLHdFQUFJO0FBQ1osT0FBTyxDQUFDLDZFQUFJO0FBQ1osT0FBTyxDQUFDLDRFQUFJOztBQUVaLEFBQUEsQ0FBQyxDQUFDO0VBQ0EsTUFBTSxFQUFFLENBQUM7RUFDVCxPQUFPLEVBQUUsQ0FBQyxHQUNYOzs7QUFFRCxBQUFBLElBQUksQ0FBQztFQUNILEtBQUssRUFBRSxJQUFJO0VBQ1gsU0FBUyxFQUFFLEtBQUs7RUFDaEIsTUFBTSxFQUFFLElBQUk7RUFDWixnQkFBZ0IsRUFBRSxJQUFJO0VBQ3RCLE1BQU0sRUFBRSxNQUFNO0VBQ2QsV0FBVyxFQUFFLHlCQUF5QixHQUN2Qzs7O0FBRUQsQUFBQSxDQUFDLENBQUM7RUFDQSxlQUFlLEVBQUUsSUFBSTtFQUNyQixLQUFLLEVBQUUsSUFBSSxHQUtaOztFQVBELEFBSUUsQ0FKRCxBQUlFLE1BQU0sQ0FBQztJQUNOLGVBQWUsRUFBRSxJQUFJLEdBQ3RCOzs7QUFHSCxBQUFBLEVBQUUsQ0FBQztFQUNELGVBQWUsRUFBRSxJQUFJLEdBQ3RCOzs7QUFFRCxBQUFBLEVBQUUsQ0FBQztFQUNELFNBQVMsRUFBRSxJQUFJLEdBQ2hCOzs7QUFFRCxBQUFBLEVBQUUsQ0FBQztFQUNELFNBQVMsRUFBRSxJQUFJLEdBQ2hCOzs7QUFFRCxBQUFBLEVBQUUsQ0FBQztFQUNELFNBQVMsRUFBRSxJQUFJLEdBQ2hCOzs7QUFFRCxBQUFBLEVBQUUsQ0FBQztFQUNELFNBQVMsRUFBRSxJQUFJLEdBQ2hCOzs7QUFFRCxBQUFBLEVBQUUsQ0FBQztFQUNELFNBQVMsRUFB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 */","// @import \"file\";\n\n@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n  min-width: 240px;\n  height: auto;\n  background-color: #fff;\n  margin: 0 auto;\n  font-family: 'Playfair Display', serif;\n}\n\na {\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: none;\n  }\n}\n\nli {\n  list-style-type: none;\n}\n\nh1 {\n  font-size: 36px;\n}\n\nh2 {\n  font-size: 30px;\n}\n\nh3 {\n  font-size: 26px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 14px;\n}\n\np {\n  font-size: 14px;\n}\n\nheader {\n  max-width: 1200px;\n  height: auto;\n  max-height: 163px;\n  margin: 0 auto;\n\n  .header {\n    padding: 68px 5.6% 72px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &__icon {\n      font-family: 'Inconsolata', monospace;\n      font-weight: 400;\n      line-height: 24px;\n      text-transform: uppercase;\n      letter-spacing: 6px;\n      max-height: 23px;\n    }\n\n    &_menu {\n      font-weight: 400;\n      line-height: 24px;\n      text-transform: uppercase;\n      max-width: 585px;\n      width: 100%;\n      max-height: 11px;\n      margin-top: -13px;\n      color: #626262;\n\n      ul {\n        display: flex;\n        justify-content: space-between;\n\n\n        li {\n          padding-left: 2%;\n        }\n\n        a:hover {\n          color: #929292;\n        }\n      }\n    }\n  }\n}\n\nsection {\n  width: 100%;\n\n  h2 {\n    padding-top: 28px;\n    color: #626262;\n    font-weight: 400;\n  }\n\n  h5 {\n    font-family: 'Ubuntu', sans-serif;\n    color: #b4ad9e;\n    text-transform: uppercase;\n    font-weight: 300;\n  }\n\n  p {\n    padding-top: 34px;\n    color: #626262;\n    font-weight: 400;\n    line-height: 24px;\n  }\n\n  .first-post {\n    max-width: 1061px;\n    max-height: 989px;\n    margin: 0 auto;\n\n    &__img {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: #f2f2f2;\n\n      img {\n        width: 100%;\n        height: auto;\n      }\n    }\n\n    &-content {\n      width: 90%;\n      max-width: 893px;\n      height: auto;\n      margin: 0 auto;\n      padding-top: 99px;\n      padding-bottom: 40px;\n\n      h2 {\n        margin-left: -3px;\n        margin-top: -4px;\n      }\n\n      p {\n        margin-top: -9px;\n        margin-left: -3px;\n      }\n\n      h5 {\n        max-height: 11px;\n        margin-top: -4px;\n        margin-left: -3px;\n      }\n\n      .btnLoadMore {\n        opacity: 0;\n        position: absolute;\n        pointer-events: none;\n      }\n\n      label + h5 {\n        padding-top: 52px;\n        margin-top: -6px;\n      }\n    }\n  }\n\n  .second-post {\n    max-width: 960px;\n    height: auto;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    padding-top: 102px;\n\n    &-box {\n      max-width: 43.75%;\n      display: flex;\n      flex-direction: column;\n      padding: 0 3.125% 105px;\n      text-align: left;\n\n      &-content {\n        .btnLoadMore {\n          opacity: 0;\n          position: absolute;\n          pointer-events: none;\n        }\n\n        .content {\n          display: -webkit-box;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n          overflow: hidden;\n        }\n\n        .btnLoadMore ~ label::before {\n          content: \"Load More\";\n          padding-top: 50px;\n        }\n\n        .btnLoadMore:checked ~ label::before {\n          content: \"Load Less\";\n        }\n\n        .btnLoadMore:checked + .content {\n          -webkit-line-clamp: unset;\n        }\n\n        .btn {\n          color: #626262;\n          background-color: inherit;\n          padding: 4px 10px;\n\n          &:hover {\n            background-color: #626262;\n            color: #fff;\n          }\n        }\n\n        h5 {\n          max-height: 11px;\n          margin-top: -7px;\n        }\n\n        h2 {\n          max-height: 30px;\n          margin-top: -4px;\n        }\n\n        p {\n          margin-top: 3px;\n        }\n      }\n\n      &__img {\n        width: 100%;\n        height: auto;\n        padding-bottom: 32px;\n\n        img {\n          width: 100%;\n          height: auto;\n        }\n      }\n    }\n\n    .btn_loadMore {\n      margin: 35px auto 98px;\n\n      button {\n        padding: 21px 34px;\n        min-width: 164px;\n        min-height: 60px;\n        color: #626262;\n        background-color: inherit;\n        border: 1px solid #626262;\n\n        &:hover {\n          background-color: #eee;\n          cursor: pointer;\n        }\n\n        h4 {\n          font-weight: 400;\n          margin: 0 auto;\n        }\n      }\n    }\n  }\n\n  .newSletter {\n    width: 100%;\n    height: auto;\n    background-color: #f0f0f0;\n    margin-top: -9px;\n    max-height: 287px;\n\n    &_content {\n      max-width: 400px;\n      margin: 0 auto;\n      padding: 73px 0 74px;\n\n      h2 {\n        color: #333;\n        font-weight: 400;\n        text-align: center;\n        letter-spacing: 0.75px;\n        padding-bottom: 69px;\n        padding-top: 0;\n        max-height: 30px;\n        margin-top: -8px;\n      }\n\n      form {\n        border-bottom: 1px solid #000;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 4px;\n\n        input {\n          background-color: inherit;\n          width: 90.75%;\n          border: none;\n          color: #626262;\n          font-size: 14px;\n          font-weight: 400;\n          line-height: 24px;\n          text-align: left;\n          margin: 0;\n          padding: 10px 0;\n\n          &:active,\n          &:focus {\n            border: none;\n            outline: none;\n          }\n        }\n\n        button {\n          background-color: inherit;\n          border: none;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin-top: 9px;\n\n          &:hover {\n            cursor: pointer;\n          }\n\n          img {\n            width: 95%;\n            height: auto;\n\n            &:hover {\n              width: 100%;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfooter {\n  width: 100%;\n  background-color: #f0f0f0;\n\n  .footer {\n    max-width: 1200px;\n    width: 100%;\n    margin: 0 auto;\n    max-height: 97px;\n\n    &-content {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 40px 5.9% 45px 12.5%;\n\n      &_left {\n        display: flex;\n        justify-content: flex-start;\n        margin-top: -18px;\n\n        p {\n          padding-right: 17px;\n          font-weight: 400;\n          line-height: 24px;\n          color: #000;\n          text-align: left;\n          max-height: 12px;\n        }\n      }\n\n      &_right {\n        display: flex;\n        justify-content: flex-end;\n        margin-top: -6px;\n\n        p {\n          padding-left: 17px;\n          padding-right: 4px;\n          font-weight: 400;\n          line-height: 24px;\n          color: #000;\n          text-align: left;\n          max-height: 12px;\n        }\n\n        img {\n          padding-left: 20px;\n          color: #626262;\n          max-height: 12px;\n        }\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 934px) {\n  section {\n    .second-post {\n      &-box {\n        max-width: 40%;\n        padding: 0 5% 122px;\n      }\n\n      .btn_loadMore {\n        margin: 0 auto 100px;\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    .header {\n      justify-content: center;\n      flex-direction: column;\n\n      &__icon {\n        text-align: center;\n        padding: 15px;\n      }\n\n      &_menu {\n        max-width: 100%;\n\n        ul {\n          li {\n            padding-left: 0;\n          }\n        }\n      }\n    }\n  }\n\n  section {\n    .first-post {\n      width: 90%;\n\n      &-content {\n        padding-top: 70px;\n        padding-bottom: 30px;\n      }\n    }\n\n    .second-post {\n      &-box {\n        max-width: 90%;\n      }\n    }\n  }\n\n  footer .footer {\n    &-content {\n      padding: 40px 6% 45px;\n    }\n  }\n}\n\n@media screen and (max-width: 450px) {\n  h5 {\n    font-size: 13px;\n  }\n\n  header {\n    .header {\n      flex-direction: row;\n      justify-content: space-between;\n      padding: 40px 10%;\n\n      &__icon {\n        text-align: left;\n        padding: 0;\n\n        h2 {\n          font-size: 26px;\n        }\n      }\n\n      &_menu {\n        width: auto;\n        padding-left: 10px;\n\n        ul {\n          flex-direction: column;\n        }\n      }\n    }\n  }\n\n  section {\n    .first-post {\n      &-content {\n        padding-top: 45px;\n        padding-bottom: 25px;\n\n        label + h5 {\n          padding-top: 40px;\n        }\n\n        .content {\n          display: -webkit-box;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n          overflow: hidden;\n        }\n\n        .btnLoadMore ~ label::before {\n          content: \"Load More\";\n        }\n\n        .btnLoadMore:checked ~ label::before {\n          content: \"Load Less\";\n        }\n\n        .btnLoadMore:checked + .content {\n          -webkit-line-clamp: unset;\n        }\n\n        .btn {\n          color: #626262;\n          background-color: inherit;\n          padding: 4px 10px;\n\n          &:hover {\n            background-color: #626262;\n            color: #fff;\n          }\n        }\n      }\n    }\n\n    .second-post {\n      padding-top: 45px;\n\n      &-box {\n        padding-bottom: 45px;\n      }\n\n      .btn_loadMore {\n        margin: 0 auto 60px;\n\n        button {\n          padding: 14px 20px;\n        }\n      }\n    }\n\n    h2 {\n      font-size: 26px;\n    }\n\n    p {\n      font-size: 13px;\n    }\n\n    .newSletter {\n      &_content {\n        max-width: 80%;\n        padding: 40px 0;\n\n        h2 {\n          padding-bottom: 20px;\n          font-size: 16px;\n        }\n      }\n    }\n  }\n\n  footer .footer {\n    &-content {\n      &_left {\n        flex-direction: column;\n      }\n\n      &_right {\n        /* foo */\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 380px) {\n  footer .footer {\n    &-content {\n      flex-direction: column;\n      justify-content: center;\n\n      &_left {\n        padding-bottom: 20px;\n\n        p {\n          padding-right: 0;\n        }\n      }\n\n      &_right {\n        p {\n          padding-left: 0;\n        }\n      }\n    }\n  }\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 2 */
/*!****************************************************************************************!*\
  !*** multi ./build/util/../helpers/hmr-client.js ./scripts/main.js ./styles/main.scss ***!
  \****************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/beauty.loc/wp-content/themes/beautysalon/assets/build/util/../helpers/hmr-client.js */3);
__webpack_require__(/*! ./scripts/main.js */18);
module.exports = __webpack_require__(/*! ./styles/main.scss */19);


/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./build/helpers/hmr-client.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hotMiddlewareScript = __webpack_require__(/*! webpack-hot-middleware/client?noInfo=true&timeout=20000&reload=true */ 4);

hotMiddlewareScript.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});

/***/ }),
/* 4 */
/*!**********************************************************************************************!*\
  !*** ../node_modules/webpack-hot-middleware/client.js?noInfo=true&timeout=20000&reload=true ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: "/__webpack_hmr",
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {}
};
if (true) {
  var querystring = __webpack_require__(/*! querystring */ 6);
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
    "You should include a polyfill if you want to support this browser: " +
    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect) options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors) options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles) options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function() {
    if ((new Date() - lastActivity) > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log("[HMR] connected");
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function(fn) {
      listeners.push(fn);
    }
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == "\uD83D\uDC93") {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ 9);

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ 11)({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles
    });
  }

  var styles = {
    errors: "color: #ff0000;",
    warnings: "color: #999933;"
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type].map(function(msg) { return strip(msg); }).join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : "";
    var title = "[HMR] bundle " + name + "has " + obj[type].length + " " + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group("%c" + title, style);
      console.log("%c" + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        "%c" + title + "\n\t%c" + newProblems.replace(/\n/g, "\n\t"),
        style + "font-weight: bold;",
        style + "font-weight: normal;"
      );
    }
  }

  return {
    cleanProblemsCache: function () {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    }
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ 17);

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch(obj.action) {
    case "building":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilding"
        );
      }
      break;
    case "built":
      if (options.log) {
        console.log(
          "[HMR] bundle " + (obj.name ? "'" + obj.name + "' " : "") +
          "rebuilt in " + obj.time + "ms"
        );
      }
      // fall through
    case "sync":
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, "?noInfo=true&timeout=20000&reload=true", __webpack_require__(/*! ./../webpack/buildin/module.js */ 5)(module)))

/***/ }),
/* 5 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/*!************************************************!*\
  !*** ../node_modules/querystring-es3/index.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ 7);
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ 8);


/***/ }),
/* 7 */
/*!*************************************************!*\
  !*** ../node_modules/querystring-es3/decode.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 8 */
/*!*************************************************!*\
  !*** ../node_modules/querystring-es3/encode.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 9 */
/*!*******************************************!*\
  !*** ../node_modules/strip-ansi/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ 10)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),
/* 10 */
/*!*******************************************!*\
  !*** ../node_modules/ansi-regex/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),
/* 11 */
/*!****************************************************************!*\
  !*** ../node_modules/webpack-hot-middleware/client-overlay.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#E8E8E8',
  lineHeight: '1.2',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left'
};

var ansiHTML = __webpack_require__(/*! ansi-html */ 12);
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'E36049',
  green: 'B3CB74',
  yellow: 'FFD080',
  blue: '7CAFC2',
  magenta: '7FACCA',
  cyan: 'C3C2EF',
  lightgrey: 'EBE7E3',
  darkgrey: '6D7891'
};

var Entities = __webpack_require__(/*! html-entities */ 13).AllHtmlEntities;
var entities = new Entities();

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function(msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType (type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' + color + '; color:#fff; padding:2px 4px; border-radius: 2px">' +
      type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function(options) {
  for (var color in options.overlayColors) {
    if (color in colors) {
      colors[color] = options.overlayColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear
  }
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),
/* 12 */
/*!******************************************!*\
  !*** ../node_modules/ansi-html/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),
/* 13 */
/*!**************************************************!*\
  !*** ../node_modules/html-entities/lib/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_entities_1 = __webpack_require__(/*! ./xml-entities */ 14);
exports.XmlEntities = xml_entities_1.XmlEntities;
var html4_entities_1 = __webpack_require__(/*! ./html4-entities */ 15);
exports.Html4Entities = html4_entities_1.Html4Entities;
var html5_entities_1 = __webpack_require__(/*! ./html5-entities */ 16);
exports.Html5Entities = html5_entities_1.Html5Entities;
exports.AllHtmlEntities = html5_entities_1.Html5Entities;


/***/ }),
/* 14 */
/*!*********************************************************!*\
  !*** ../node_modules/html-entities/lib/xml-entities.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ 0);
var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};
var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};
var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};
var XmlEntities = /** @class */ (function () {
    function XmlEntities() {
    }
    XmlEntities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/[<>"'&]/g, function (s) {
            return CHAR_S_INDEX[s];
        });
    };
    XmlEntities.encode = function (str) {
        return new XmlEntities().encode(str);
    };
    XmlEntities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&#?[0-9a-zA-Z]+;?/g, function (s) {
            if (s.charAt(1) === '#') {
                var code = s.charAt(2).toLowerCase() === 'x' ?
                    parseInt(s.substr(3), 16) :
                    parseInt(s.substr(2));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        return String.fromCharCode(code);
                    }
                    else {
                        return surrogate_pairs_1.fromCodePoint(code);
                    }
                }
                return '';
            }
            return ALPHA_INDEX[s] || s;
        });
    };
    XmlEntities.decode = function (str) {
        return new XmlEntities().decode(str);
    };
    XmlEntities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var alpha = CHAR_INDEX[c];
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
            if (c < 32 || c > 126) {
                if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + c + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonUTF = function (str) {
        return new XmlEntities().encodeNonUTF(str);
    };
    XmlEntities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i++;
            }
            else {
                result += '&#' + c + ';';
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonASCII = function (str) {
        return new XmlEntities().encodeNonASCII(str);
    };
    return XmlEntities;
}());
exports.XmlEntities = XmlEntities;


/***/ }),
/* 15 */
/*!***********************************************************!*\
  !*** ../node_modules/html-entities/lib/html4-entities.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ 0);
var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'AElig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
var alphaIndex = {};
var numIndex = {};
(function () {
    var i = 0;
    var length = HTML_ALPHA.length;
    while (i < length) {
        var a = HTML_ALPHA[i];
        var c = HTML_CODES[i];
        alphaIndex[a] = String.fromCharCode(c);
        numIndex[c] = a;
        i++;
    }
})();
var Html4Entities = /** @class */ (function () {
    function Html4Entities() {
    }
    Html4Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1).toLowerCase() === 'x' ?
                    parseInt(entity.substr(2), 16) :
                    parseInt(entity.substr(1));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        chr = String.fromCharCode(code);
                    }
                    else {
                        chr = surrogate_pairs_1.fromCodePoint(code);
                    }
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html4Entities.decode = function (str) {
        return new Html4Entities().decode(str);
    };
    Html4Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var alpha = numIndex[str.charCodeAt(i)];
            result += alpha ? "&" + alpha + ";" : str.charAt(i);
            i++;
        }
        return result;
    };
    Html4Entities.encode = function (str) {
        return new Html4Entities().encode(str);
    };
    Html4Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var cc = str.charCodeAt(i);
            var alpha = numIndex[cc];
            if (alpha) {
                result += "&" + alpha + ";";
            }
            else if (cc < 32 || cc > 126) {
                if (cc >= surrogate_pairs_1.highSurrogateFrom && cc <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + cc + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonUTF = function (str) {
        return new Html4Entities().encodeNonUTF(str);
    };
    Html4Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i++;
            }
            else {
                result += '&#' + c + ';';
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonASCII = function (str) {
        return new Html4Entities().encodeNonASCII(str);
    };
    return Html4Entities;
}());
exports.Html4Entities = Html4Entities;


/***/ }),
/* 16 */
/*!***********************************************************!*\
  !*** ../node_modules/html-entities/lib/html5-entities.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ 0);
var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
var DECODE_ONLY_ENTITIES = [['NewLine', [10]]];
var alphaIndex = {};
var charIndex = {};
createIndexes(alphaIndex, charIndex);
var Html5Entities = /** @class */ (function () {
    function Html5Entities() {
    }
    Html5Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1) === 'x' ?
                    parseInt(entity.substr(2).toLowerCase(), 16) :
                    parseInt(entity.substr(1));
                if (!isNaN(code) || code >= -32768) {
                    if (code <= 65535) {
                        chr = String.fromCharCode(code);
                    }
                    else {
                        chr = surrogate_pairs_1.fromCodePoint(code);
                    }
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html5Entities.decode = function (str) {
        return new Html5Entities().decode(str);
    };
    Html5Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var charInfo = charIndex[str.charCodeAt(i)];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            result += str.charAt(i);
            i++;
        }
        return result;
    };
    Html5Entities.encode = function (str) {
        return new Html5Entities().encode(str);
    };
    Html5Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var charInfo = charIndex[c];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            if (c < 32 || c > 126) {
                if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                    result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                    i++;
                }
                else {
                    result += '&#' + c + ';';
                }
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonUTF = function (str) {
        return new Html5Entities().encodeNonUTF(str);
    };
    Html5Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            if (c >= surrogate_pairs_1.highSurrogateFrom && c <= surrogate_pairs_1.highSurrogateTo) {
                result += '&#' + surrogate_pairs_1.getCodePoint(str, i) + ';';
                i += 2;
            }
            else {
                result += '&#' + c + ';';
                i++;
            }
        }
        return result;
    };
    Html5Entities.encodeNonASCII = function (str) {
        return new Html5Entities().encodeNonASCII(str);
    };
    return Html5Entities;
}());
exports.Html5Entities = Html5Entities;
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    while (i--) {
        var _a = ENTITIES[i], alpha = _a[0], _b = _a[1], chr = _b[0], chr2 = _b[1];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo = void 0;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chr2) {
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            addChar && (charInfo[chr2] = alpha);
        }
        else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            addChar && (charInfo[''] = alpha);
        }
    }
    i = DECODE_ONLY_ENTITIES.length;
    while (i--) {
        var _c = DECODE_ONLY_ENTITIES[i], alpha = _c[0], _d = _c[1], chr = _d[0], chr2 = _d[1];
        alphaIndex[alpha] = String.fromCharCode(chr) + (chr2 ? String.fromCharCode(chr2) : '');
    }
}


/***/ }),
/* 17 */
/*!****************************************************************!*\
  !*** ../node_modules/webpack-hot-middleware/process-update.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {
  throw new Error("[HMR] Hot Module Replacement is disabled.");
}

var hmrDocsUrl = "https://webpack.js.org/concepts/hot-module-replacement/"; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = { 				
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function(data) {
    console.warn("Ignored an update to unaccepted module " + data.chain.join(" -> "));
  },
  onDeclined: function(data) {
    console.warn("Ignored an update to declined module " + data.chain.join(" -> "));
  },
  onErrored: function(data) {
    console.error(data.error);
    console.warn("Ignored an error while updating module " + data.moduleId + " (" + data.type + ")");
  } 
}

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function(hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == "idle") {
    if (options.log) console.log("[HMR] Checking for updates on the server...");
    check();
  }

  function check() {
    var cb = function(err, updatedModules) {
      if (err) return handleError(err);

      if(!updatedModules) {
        if (options.warn) {
          console.warn("[HMR] Cannot find update (Full reload needed)");
          console.warn("[HMR] (Probably because of restarting the server)");
        }
        performReload();
        return null;
      }

      var applyCallback = function(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function(outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }

    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
        result.then(function(updatedModules) {
            cb(null, updatedModules);
        });
        result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if(unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
          "(Full reload needed)\n" +
          "This is usually because the modules which have changed " +
          "(and their parents) do not know how to hot reload themselves. " +
          "See " + hmrDocsUrl + " for more details."
        );
        unacceptedModules.forEach(function(moduleId) {
          console.warn("[HMR]  - " + moduleMap[moduleId]);
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if(!renewedModules || renewedModules.length === 0) {
        console.log("[HMR] Nothing hot updated.");
      } else {
        console.log("[HMR] Updated modules:");
        renewedModules.forEach(function(moduleId) {
          console.log("[HMR]  - " + moduleMap[moduleId]);
        });
      }

      if (upToDate()) {
        console.log("[HMR] App is up to date.");
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn("[HMR] Cannot check for update (Full reload needed)");
        console.warn("[HMR] " + err.stack || err.message);
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn("[HMR] Update check failed: " + err.stack || err.message);
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn("[HMR] Reloading page");
      window.location.reload();
    }
  }
};


/***/ }),
/* 18 */
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

//import 'file'

/***/ }),
/* 19 */
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/cache-loader/dist/cjs.js!../../node_modules/css-loader??ref--4-3!../../node_modules/postcss-loader/lib??ref--4-4!../../node_modules/resolve-url-loader??ref--4-5!../../node_modules/sass-loader/lib/loader.js??ref--4-6!../../node_modules/import-glob!./main.scss */ 1);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 21)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/cache-loader/dist/cjs.js!../../node_modules/css-loader??ref--4-3!../../node_modules/postcss-loader/lib??ref--4-4!../../node_modules/resolve-url-loader??ref--4-5!../../node_modules/sass-loader/lib/loader.js??ref--4-6!../../node_modules/import-glob!./main.scss */ 1, function() {
		var newContent = __webpack_require__(/*! !../../node_modules/cache-loader/dist/cjs.js!../../node_modules/css-loader??ref--4-3!../../node_modules/postcss-loader/lib??ref--4-4!../../node_modules/resolve-url-loader??ref--4-5!../../node_modules/sass-loader/lib/loader.js??ref--4-6!../../node_modules/import-glob!./main.scss */ 1);

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 21 */
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 22 */
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map