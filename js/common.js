var INSTACNE_IMG_PREFIX = "img/instacnes/";
var TALENT_IMG_PREFIX 	= "img/talents/";
var COVENANT_IMG_PREFIX = "img/covenants/";

var WowSpec = function(spec, cov) {
	const _spec_role = spec.role;
	const _spec_icon = spec.image;
	const _spec_text = spec.name;
	const _spec_bg = spec.portrait;
	const _cov_icon = cov.image;
	const _cov_text = cov.name;
	const _id = spec.id +"-"+cov.clazz;

	this.getSpecRole = function() { return _spec_role };
	this.getSpecIcon = function() { return TALENT_IMG_PREFIX+_spec_icon };
	this.getSpecText = function() { return _spec_text };
	this.getSpecBg = function() { return TALENT_IMG_PREFIX+_spec_bg };
	this.getCovIcon = function() { return COVENANT_IMG_PREFIX+_cov_icon };
	this.getCovText = function() { return _cov_text };
	this.getId = function() { return _id };
};

var ImageSlider = function(keys, mapData) {
	var _arr = keys;
	var _idx = -1;
	var MAX_IDX = _arr.length -1;
	var MIN_IDX = 0;

	this.getNext = function() {
		_idx ++;

		if(_idx > MAX_IDX) _idx = MIN_IDX;

		return mapData[_arr[_idx]];
	};

	this.getPrev = function() {
		_idx --;

		if(_idx < MIN_IDX) _idx = MAX_IDX;

		return mapData[_arr[_idx]];
	};
};

var Timer = function(seconds, callback) {
	//var _mm = Math.floor(seconds/60);
	//var _ss = seconds % 60;
	var _starting = seconds;
	var _seconds = seconds;
	var _callback = callback;

	this.init = function() {
		this.reset();
		_callback(_seconds);
	};

	this.tick = function() {
		_seconds--;
		_callback(_seconds);
	};

	this.reset = function() {
		_seconds = _starting;
	};
};


var ban_data = null;
var createData = function(covs, clss){
	var phead = [];
	var head = [];
	var body = {};

	/* 직업 */
	for(var id in clss) {
		var c = clss[id];
		var specz = c.specializations;
		var job_clazz = c.clazz
		var phead_clazz_repo = [job_clazz, job_clazz].map(e => "."+e.replace(/\s/g,"."));

		/* 전문화 */
		for(var i=0; i<specz.length; i++) {
			var s = specz[i];
			var sid = id+"-"+i;
			var spec_clazz = job_clazz+" "+s.clazz;
			var head_clazz_repo = [job_clazz, spec_clazz].map(e => "."+e.replace(/\s/g,"."));

			/* 성약단 */
			for(var cv in covs) {
				var csid = sid+"-"+cv;
				var cov_clazz = covs[cv]["clazz"]+" "+spec_clazz;
				var cov_clazz_repo = [job_clazz, spec_clazz, covs[cv]["clazz"]].map(e => "."+e.replace(/\s/g,"."));
				/* spec & cov */
				body[csid] = {sid: sid, cid: cv, team: "", pick: false, ban: false };
			}
			/* spec */
			head.push({id: sid, name:s.name ,image: s.image, role: s.role, portrait:s.portrait, clazz: spec_clazz, clazz_repo: head_clazz_repo });
		}
		/* job */
		phead.push({id: id, name:c.name, image: c.image, nos:specz.length, clazz: job_clazz, clazz_repo: phead_clazz_repo }); //nos - the number of speicalizations in a class
	}
	return {
		phead	: phead,
		head	: head,
		body	: body
	};
};

var renderHead = function(phead, head) {
	var $phead = jQuery("#ban-spec-list .clazz-list .clazz-parent");
	var $head = jQuery("#ban-spec-list .clazz-list .clazz-child");

	var spczTotCnt = head.length;

	var pheadArr = [];
	for(var i=0; i<phead.length; i++) {
		var ph = phead[i];
		var spczCnt = ph.nos;

		var width = "100%*"+spczCnt+"/"+spczTotCnt;

		var pdiv = document.createElement("div");
		pdiv.className = "item-box "+ph.clazz;
		pdiv.style.width = "calc("+width+")";
		pdiv.clazz_repo = ph.clazz_repo;
		pdiv.clazz_key = ph.clazz;

			var img = document.createElement("img");
			img.src = TALENT_IMG_PREFIX+ph.image;
			var label = document.createElement("div");
			label.innerHTML = ph.name;

		pdiv.appendChild(img);
		pdiv.appendChild(label);
		pheadArr.push(pdiv);
	}

	var headArr = [];
	for(var i=0; i<head.length; i++) {
		var h = head[i];

		var width = "100%/"+spczTotCnt;

		var div = document.createElement("div");
		div.className = "item-box "+h.clazz;
		div.style.width = "calc("+width+")";
		div.clazz_repo = h.clazz_repo;
		div.clazz_key = h.clazz;

			var img = document.createElement("img");
			img.src = TALENT_IMG_PREFIX+h.image;
			img.title = h.name;
			//var label = document.createElement("div");
			//label.innerHTML = ph.name;

		div.appendChild(img);
		//pdiv.appendChild(label);
		headArr.push(div);
	}

	$phead.append(pheadArr);
	$head.append(headArr);
};

var renderLeftBody = function(covs) {
	var $left = jQuery("#ban-spec-list .covenants-list");

	var covArr = [];
	for(var c in covs) {
		var cv = covs[c];
		//var width = "100%/"+spczTotCnt;

		var div = document.createElement("div");
		div.className = "item-box "+cv.clazz;
		div.clazz_repo = ["."+cv.clazz];
		div.clazz_key = cv.clazz;
		//div.style.width = "calc("+width+")";

			var img = document.createElement("img");
			img.src = COVENANT_IMG_PREFIX+cv.image;
			img.title = cv.name;
			var label = document.createElement("span");
			label.innerHTML = cv.name;

		div.appendChild(img);
		div.appendChild(label);
		covArr.push(div);
	}

	$left.append(covArr);
};

var renderRightBody = function(covs, head) {
	var $right = jQuery("#ban-spec-list .spec-map");

	var bodyArr = [];
	for(var c in covs) {
		var cov_clazz = covs[c]["clazz"];
		var row = document.createElement("div");
		row.className = "row-container";
		row.style.marginBottom="6px";
		for(var i=0; i<head.length; i++) {
			var h = head[i];
			var wowSpec = new WowSpec(h, covs[c]);
			var div = document.createElement("div");
			div.className = "item-box "+h.clazz+" "+cov_clazz;
			div.draggable = true;
			div.clazz_repo = h.clazz_repo.concat("."+cov_clazz);
			div.id = wowSpec.getId();
			//div["data-portrait"] = h.portrait;
			div["data-wow"] = wowSpec;
			row.appendChild(div);
		}
		bodyArr.push(row);
	}
	$right.append(bodyArr);
};

var getCovSourcesForAC = function(data) {
	var result = [];
	for(var prop in data) {
		var row = data[prop];
		result.push( { icon:COVENANT_IMG_PREFIX+row["image"], value: row["name"], key:row["clazz"] });
	}

	return result;
};

var getJobSourcesForAC = function(arr) {
	return arr.map( e => { return { icon: TALENT_IMG_PREFIX+e.image, value:e.name, key: e.id } } );
};
