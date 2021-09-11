(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vis_novel01_atlas_1", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"vis_novel01_atlas_2", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"vis_novel01_atlas_3", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"vis_novel01_atlas_4", frames: [[1282,214,220,145],[1598,0,245,215],[0,0,1280,720],[1282,0,314,212]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.yanginike = function() {
	this.initialize(ss["vis_novel01_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.buluromaakudahnaikni = function() {
	this.initialize(ss["vis_novel01_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Folder1 = function() {
	this.initialize(ss["vis_novel01_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer23copy = function() {
	this.initialize(ss["vis_novel01_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer44 = function() {
	this.initialize(ss["vis_novel01_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer45 = function() {
	this.initialize(ss["vis_novel01_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer46 = function() {
	this.initialize(ss["vis_novel01_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer47 = function() {
	this.initialize(ss["vis_novel01_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Layer48 = function() {
	this.initialize(ss["vis_novel01_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.nijelarumahpalingangkerkatsini = function() {
	this.initialize(ss["vis_novel01_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.buluromaakudahnaikni();
	this.instance.setTransform(-122.5,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-107.5,245,215);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.nijelarumahpalingangkerkatsini();
	this.instance.setTransform(-157,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-106,314,212);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.yanginike();
	this.instance.setTransform(-110,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-72.5,220,145);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer23copy();
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer46();
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer45();
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer44();
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.4)").s().p("Eg35A88MAAAh54MBvzAAAMAAAB54g");
	this.shape.setTransform(357.8,390.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,715.6,780.1);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer47();
	this.instance.setTransform(0,0,1.0844,1.1168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1388.1,804.1), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhoVA6sMAAAh1XMDQrAAAMAAAB1Xg");
	this.shape.setTransform(667.75,375.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1335.5,751.2), null);


// stage content:
(lib.visual_novel_test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start_scene_01:0,start_scene_02:89,start_scene_03:171,start_scene_04:212,next_dialog:220};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [211,220];
	// timeline functions:
	this.frame_211 = function() {
		this.stop();
		this.next_btn.on('click', function() {
			exportRoot.play();
		})
	}
	this.frame_220 = function() {
		this.stop();
		this.next_btn.on('click', function() {
			exportRoot.play();
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(211).call(this.frame_211).wait(9).call(this.frame_220).wait(10));

	// dialog_03
	this.instance = new lib.Tween20("synched",0);
	this.instance.setTransform(701.8,295.3,0.6181,0.6181,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:655,y:254.15,alpha:1},3).wait(1));

	// dialog_02
	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.setTransform(950.15,195.5,0.4651,0.4651);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(213).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:0.9199,scaleY:0.9199,x:878.85,y:147.45,alpha:1},6).to({regX:0.2,scaleX:0.9821,scaleY:0.9821,x:869.15,y:140.85},1).to({regX:0.1,scaleX:0.9199,scaleY:0.9199,x:878.85,y:147.45},1).to({scaleX:0.4772,scaleY:0.4772,x:948.3,y:194.3,alpha:0},8).wait(1));

	// scene_orang
	this.instance_2 = new lib.Folder1();
	this.instance_2.setTransform(320,4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(212).to({_off:false},0).wait(18));

	// next_button
	this.next_btn = new lib.Symbol4();
	this.next_btn.name = "next_btn";
	this.next_btn.setTransform(1032.4,360.8,0.6557,0.8997,0,0,0,357.9,390.1);
	this.next_btn._off = true;
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(211).to({_off:false},0).wait(9).to({_off:true},1).wait(9));

	// dialog01
	this.instance_3 = new lib.Tween14("synched",0);
	this.instance_3.setTransform(886,349.05,0.3934,0.3934);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(202).to({_off:false},0).to({scaleX:1,scaleY:1,x:819.25,y:305.05,alpha:1},7).wait(1).to({scaleX:1.0977,scaleY:1.0977,x:808.5,y:298},0).wait(1).to({scaleX:1,scaleY:1,x:819.25,y:305.05},0).to({_off:true},1).wait(18));

	// cahaya
	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.setTransform(640,360);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(188).to({_off:false},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(18));

	// rumah_3
	this.instance_5 = new lib.Layer48();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({_off:false},0).to({_off:true},39).wait(21));

	// rumah_2
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(710.95,390.25,1.0384,1.0384,0,0,0,693.5,401.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({_off:false},0).wait(1).to({regX:694,regY:402.1,x:709.75,y:390.9},0).wait(1).to({x:708},0).wait(1).to({x:706.25},0).wait(1).to({x:704.5},0).wait(1).to({x:702.7},0).wait(1).to({x:700.95},0).wait(1).to({x:699.2},0).wait(1).to({x:697.45},0).wait(1).to({x:695.7},0).wait(1).to({x:693.9},0).wait(1).to({x:692.15},0).wait(1).to({x:690.4},0).wait(1).to({x:688.65},0).wait(1).to({x:686.9},0).wait(1).to({x:685.1},0).wait(1).to({x:683.35},0).wait(1).to({x:681.6},0).wait(1).to({x:679.85},0).wait(1).to({x:678.1},0).wait(1).to({x:676.3},0).wait(1).to({x:674.55},0).wait(1).to({x:672.8},0).wait(1).to({x:671.05},0).wait(1).to({x:669.3},0).wait(1).to({x:667.5},0).wait(1).to({x:665.75},0).wait(1).to({x:664},0).wait(1).to({x:662.25},0).wait(1).to({x:660.5},0).wait(1).to({x:658.7},0).wait(1).to({x:656.95},0).wait(1).to({x:655.2},0).wait(1).to({x:653.45},0).wait(1).to({x:651.7},0).wait(1).to({x:649.9},0).wait(1).to({x:648.15},0).wait(1).to({x:646.4},0).wait(1).to({x:644.65},0).wait(1).to({x:642.9},0).wait(1).to({x:641.1},0).wait(1).to({x:639.35},0).wait(1).to({x:637.6},0).wait(1).to({x:635.85},0).wait(1).to({x:634.1},0).wait(1).to({x:632.3},0).wait(1).to({x:630.55},0).wait(1).to({x:628.8},0).wait(1).to({x:627.05},0).wait(1).to({x:625.3},0).wait(1).to({x:623.5},0).wait(1).to({x:621.75},0).wait(1).to({x:620},0).wait(1).to({x:618.25},0).wait(1).to({x:616.5},0).wait(1).to({x:614.7},0).wait(1).to({x:612.95},0).wait(1).to({x:611.2},0).wait(1).to({x:609.45},0).wait(1).to({x:607.7},0).wait(1).to({x:605.9},0).wait(1).to({x:604.15},0).wait(1).to({x:602.4},0).wait(1).to({x:600.65},0).wait(1).to({x:598.9},0).wait(1).to({x:597.1},0).wait(1).to({x:595.35},0).wait(1).to({x:593.6},0).wait(1).to({x:591.85},0).wait(1).to({x:590.1},0).wait(1).to({x:588.3},0).wait(1).to({x:586.55},0).wait(1).to({x:584.8},0).wait(1).to({x:583.05},0).wait(1).to({x:581.3},0).wait(1).to({x:579.5},0).wait(1).to({x:577.75},0).wait(1).to({x:576},0).wait(1).to({x:574.25},0).wait(1).to({x:572.5},0).wait(1).to({x:570.7},0).to({_off:true},1).wait(60));

	// blacktransition
	this.instance_7 = new lib.Symbol2();
	this.instance_7.setTransform(639.95,360,1,1,0,0,0,667.8,375.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({alpha:0.9655},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.8966},0).wait(1).to({alpha:0.8621},0).wait(1).to({alpha:0.8276},0).wait(1).to({alpha:0.7931},0).wait(1).to({alpha:0.7586},0).wait(1).to({alpha:0.7241},0).wait(1).to({alpha:0.6897},0).wait(1).to({alpha:0.6552},0).wait(1).to({alpha:0.6207},0).wait(1).to({alpha:0.5862},0).wait(1).to({alpha:0.5517},0).wait(1).to({alpha:0.5172},0).wait(1).to({alpha:0.4828},0).wait(1).to({alpha:0.4483},0).wait(1).to({alpha:0.4138},0).wait(1).to({alpha:0.3793},0).wait(1).to({alpha:0.3448},0).wait(1).to({alpha:0.3103},0).wait(1).to({alpha:0.2759},0).wait(1).to({alpha:0.2414},0).wait(1).to({alpha:0.2069},0).wait(1).to({alpha:0.1724},0).wait(1).to({alpha:0.1379},0).wait(1).to({alpha:0.1034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.0345},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(200));

	// awan
	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.setTransform(640.05,360.1,1.0434,1.0434,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,scaleX:1.0445,scaleY:1.0445,x:639.7497,y:359.9999},0).wait(1).to({scaleX:1.0456,scaleY:1.0456,x:639.7493},0).wait(1).to({scaleX:1.0467,scaleY:1.0467,x:639.749,y:359.9998},0).wait(1).to({scaleX:1.0478,scaleY:1.0478,x:639.7487},0).wait(1).to({scaleX:1.049,scaleY:1.049,x:639.7483,y:359.9997},0).wait(1).to({scaleX:1.0501,scaleY:1.0501,x:639.748},0).wait(1).to({scaleX:1.0512,scaleY:1.0512,x:639.7477,y:359.9996},0).wait(1).to({scaleX:1.0523,scaleY:1.0523,x:639.7473},0).wait(1).to({scaleX:1.0534,scaleY:1.0534,x:639.747,y:359.9995},0).wait(1).to({scaleX:1.0545,scaleY:1.0545,x:639.7467,y:359.9994},0).wait(1).to({scaleX:1.0556,scaleY:1.0556,x:639.7463},0).wait(1).to({scaleX:1.0567,scaleY:1.0567,x:639.746,y:359.9993},0).wait(1).to({scaleX:1.0578,scaleY:1.0578,x:639.7457},0).wait(1).to({scaleX:1.0589,scaleY:1.0589,x:639.7453,y:359.9992},0).wait(1).to({scaleX:1.0601,scaleY:1.0601,x:639.745},0).wait(1).to({scaleX:1.0612,scaleY:1.0612,x:639.7447,y:359.9991},0).wait(1).to({scaleX:1.0623,scaleY:1.0623,x:639.7443},0).wait(1).to({scaleX:1.0634,scaleY:1.0634,x:639.744,y:359.999},0).wait(1).to({scaleX:1.0645,scaleY:1.0645,x:639.7437,y:359.9989},0).wait(1).to({scaleX:1.0656,scaleY:1.0656,x:639.7433},0).wait(1).to({scaleX:1.0667,scaleY:1.0667,x:639.743,y:359.9988},0).wait(1).to({scaleX:1.0678,scaleY:1.0678,x:639.7427},0).wait(1).to({scaleX:1.0689,scaleY:1.0689,x:639.7423,y:359.9987},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:639.742},0).wait(1).to({scaleX:1.0712,scaleY:1.0712,x:639.7417,y:359.9986},0).wait(1).to({scaleX:1.0723,scaleY:1.0723,x:639.7413},0).wait(1).to({scaleX:1.0734,scaleY:1.0734,x:639.741,y:359.9985},0).wait(1).to({scaleX:1.0745,scaleY:1.0745,x:639.7407,y:359.9984},0).wait(1).to({scaleX:1.0756,scaleY:1.0756,x:639.7403},0).wait(1).to({scaleX:1.0767,scaleY:1.0767,x:639.74,y:359.9983},0).wait(1).to({scaleX:1.0778,scaleY:1.0778,x:639.7397},0).wait(1).to({scaleX:1.0789,scaleY:1.0789,x:639.7393,y:359.9982},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:639.739},0).wait(1).to({scaleX:1.0812,scaleY:1.0812,x:639.7387,y:359.9981},0).wait(1).to({scaleX:1.0823,scaleY:1.0823,x:639.7383},0).wait(1).to({scaleX:1.0834,scaleY:1.0834,x:639.738,y:359.998},0).wait(1).to({scaleX:1.0845,scaleY:1.0845,x:639.7377,y:359.9979},0).wait(1).to({scaleX:1.0856,scaleY:1.0856,x:639.7373},0).wait(1).to({scaleX:1.0867,scaleY:1.0867,x:639.737,y:359.9978},0).wait(1).to({scaleX:1.0878,scaleY:1.0878,x:639.7367},0).wait(1).to({scaleX:1.0889,scaleY:1.0889,x:639.7363,y:359.9977},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:639.736},0).wait(1).to({scaleX:1.0911,scaleY:1.0911,x:639.7357,y:359.9976},0).wait(1).to({scaleX:1.0923,scaleY:1.0923,x:639.7353},0).wait(1).to({scaleX:1.0934,scaleY:1.0934,x:639.735,y:359.9975},0).wait(1).to({scaleX:1.0945,scaleY:1.0945,x:639.7347,y:359.9974},0).wait(1).to({scaleX:1.0956,scaleY:1.0956,x:639.7343},0).wait(1).to({scaleX:1.0967,scaleY:1.0967,x:639.734,y:359.9973},0).wait(1).to({scaleX:1.0978,scaleY:1.0978,x:639.7337},0).wait(1).to({scaleX:1.0989,scaleY:1.0989,x:639.7333,y:359.9972},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:639.733},0).wait(1).to({scaleX:1.1011,scaleY:1.1011,x:639.7327,y:359.9971},0).wait(1).to({scaleX:1.1022,scaleY:1.1022,x:639.7323},0).wait(1).to({scaleX:1.1034,scaleY:1.1034,x:639.732,y:359.997},0).wait(1).to({scaleX:1.1045,scaleY:1.1045,x:639.7317,y:359.9969},0).wait(1).to({scaleX:1.1056,scaleY:1.1056,x:639.7313},0).wait(1).to({scaleX:1.1067,scaleY:1.1067,x:639.731,y:359.9968},0).wait(1).to({scaleX:1.1078,scaleY:1.1078,x:639.7307},0).wait(1).to({scaleX:1.1089,scaleY:1.1089,x:639.7303,y:359.9967},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:639.73},0).wait(1).to({scaleX:1.1111,scaleY:1.1111,x:639.7297,y:359.9966},0).wait(1).to({scaleX:1.1122,scaleY:1.1122,x:639.7293},0).wait(1).to({scaleX:1.1134,scaleY:1.1134,x:639.729,y:359.9965},0).wait(1).to({scaleX:1.1145,scaleY:1.1145,x:639.7287,y:359.9964},0).wait(1).to({scaleX:1.1156,scaleY:1.1156,x:639.7283},0).wait(1).to({scaleX:1.1167,scaleY:1.1167,x:639.728,y:359.9963},0).wait(1).to({scaleX:1.1178,scaleY:1.1178,x:639.7277},0).wait(1).to({scaleX:1.1189,scaleY:1.1189,x:639.7273,y:359.9962},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:639.727},0).wait(1).to({scaleX:1.1211,scaleY:1.1211,x:639.7267,y:359.9961},0).wait(1).to({scaleX:1.1222,scaleY:1.1222,x:639.7263},0).wait(1).to({scaleX:1.1233,scaleY:1.1233,x:639.726,y:359.996},0).wait(1).to({scaleX:1.1245,scaleY:1.1245,x:639.7257,y:359.9959},0).wait(1).to({scaleX:1.1256,scaleY:1.1256,x:639.7253},0).wait(1).to({scaleX:1.1267,scaleY:1.1267,x:639.725,y:359.9958},0).wait(1).to({scaleX:1.1278,scaleY:1.1278,x:639.7247},0).wait(1).to({scaleX:1.1289,scaleY:1.1289,x:639.7243,y:359.9957},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:639.724},0).wait(1).to({scaleX:1.1311,scaleY:1.1311,x:639.7237,y:359.9956},0).wait(1).to({scaleX:1.1322,scaleY:1.1322,x:639.7234},0).wait(1).to({scaleX:1.1333,scaleY:1.1333,x:639.723,y:359.9955},0).wait(1).to({scaleX:1.1344,scaleY:1.1344,x:639.7227,y:359.9954},0).wait(1).to({scaleX:1.1356,scaleY:1.1356,x:639.7224},0).wait(1).to({scaleX:1.1367,scaleY:1.1367,x:639.722,y:359.9953},0).wait(1).to({scaleX:1.1378,scaleY:1.1378,x:639.7217},0).wait(1).to({scaleX:1.1389,scaleY:1.1389,x:639.7214,y:359.9952},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:639.721},0).wait(1).to({scaleX:1.1411,scaleY:1.1411,x:639.7207,y:359.9951},0).wait(1).to({scaleX:1.0434,scaleY:1.0434,x:640,y:360},0).to({_off:true},1).wait(140));

	// rumah
	this.instance_9 = new lib.Tween4("synched",0);
	this.instance_9.setTransform(640,360.1,1.0313,1.0313,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:0,scaleX:1.0317,scaleY:1.0317,y:359.6998},0).wait(1).to({scaleX:1.0322,scaleY:1.0322,y:359.6997},0).wait(1).to({scaleX:1.0326,scaleY:1.0326,y:359.6995},0).wait(1).to({scaleX:1.0331,scaleY:1.0331,y:359.6994},0).wait(1).to({scaleX:1.0335,scaleY:1.0335,y:359.6992},0).wait(1).to({scaleX:1.034,scaleY:1.034,y:359.6991},0).wait(1).to({scaleX:1.0344,scaleY:1.0344,y:359.6989},0).wait(1).to({scaleX:1.0349,scaleY:1.0349,y:359.6987},0).wait(1).to({scaleX:1.0353,scaleY:1.0353,y:359.6986},0).wait(1).to({scaleX:1.0358,scaleY:1.0358,y:359.6984},0).wait(1).to({scaleX:1.0362,scaleY:1.0362,y:359.6983},0).wait(1).to({scaleX:1.0367,scaleY:1.0367,y:359.6981},0).wait(1).to({scaleX:1.0371,scaleY:1.0371,y:359.698},0).wait(1).to({scaleX:1.0376,scaleY:1.0376,y:359.6978},0).wait(1).to({scaleX:1.038,scaleY:1.038,y:359.6976},0).wait(1).to({scaleX:1.0385,scaleY:1.0385,y:359.6975},0).wait(1).to({scaleX:1.0389,scaleY:1.0389,y:359.6973},0).wait(1).to({scaleX:1.0394,scaleY:1.0394,y:359.6972},0).wait(1).to({scaleX:1.0398,scaleY:1.0398,y:359.697},0).wait(1).to({scaleX:1.0403,scaleY:1.0403,y:359.6968},0).wait(1).to({scaleX:1.0407,scaleY:1.0407,y:359.6967},0).wait(1).to({scaleX:1.0412,scaleY:1.0412,y:359.6965},0).wait(1).to({scaleX:1.0416,scaleY:1.0416,y:359.6964},0).wait(1).to({scaleX:1.0421,scaleY:1.0421,y:359.6962},0).wait(1).to({scaleX:1.0425,scaleY:1.0425,y:359.6961},0).wait(1).to({scaleX:1.043,scaleY:1.043,y:359.6959},0).wait(1).to({scaleX:1.0434,scaleY:1.0434,y:359.6957},0).wait(1).to({scaleX:1.0439,scaleY:1.0439,y:359.6956},0).wait(1).to({scaleX:1.0443,scaleY:1.0443,y:359.6954},0).wait(1).to({scaleX:1.0448,scaleY:1.0448,y:359.6953},0).wait(1).to({scaleX:1.0452,scaleY:1.0452,y:359.6951},0).wait(1).to({scaleX:1.0457,scaleY:1.0457,y:359.695},0).wait(1).to({scaleX:1.0461,scaleY:1.0461,y:359.6948},0).wait(1).to({scaleX:1.0466,scaleY:1.0466,y:359.6946},0).wait(1).to({scaleX:1.047,scaleY:1.047,y:359.6945},0).wait(1).to({scaleX:1.0475,scaleY:1.0475,y:359.6943},0).wait(1).to({scaleX:1.0479,scaleY:1.0479,y:359.6942},0).wait(1).to({scaleX:1.0484,scaleY:1.0484,y:359.694},0).wait(1).to({scaleX:1.0488,scaleY:1.0488,y:359.6939},0).wait(1).to({scaleX:1.0493,scaleY:1.0493,y:359.6937},0).wait(1).to({scaleX:1.0497,scaleY:1.0497,y:359.6935},0).wait(1).to({scaleX:1.0502,scaleY:1.0502,y:359.6934},0).wait(1).to({scaleX:1.0506,scaleY:1.0506,y:359.6932},0).wait(1).to({scaleX:1.0511,scaleY:1.0511,y:359.6931},0).wait(1).to({scaleX:1.0515,scaleY:1.0515,y:359.6929},0).wait(1).to({scaleX:1.052,scaleY:1.052,y:359.6927},0).wait(1).to({scaleX:1.0524,scaleY:1.0524,y:359.6926},0).wait(1).to({scaleX:1.0529,scaleY:1.0529,y:359.6924},0).wait(1).to({scaleX:1.0533,scaleY:1.0533,y:359.6923},0).wait(1).to({scaleX:1.0538,scaleY:1.0538,y:359.6921},0).wait(1).to({scaleX:1.0542,scaleY:1.0542,y:359.692},0).wait(1).to({scaleX:1.0547,scaleY:1.0547,y:359.6918},0).wait(1).to({scaleX:1.0551,scaleY:1.0551,y:359.6916},0).wait(1).to({scaleX:1.0556,scaleY:1.0556,y:359.6915},0).wait(1).to({scaleX:1.056,scaleY:1.056,y:359.6913},0).wait(1).to({scaleX:1.0565,scaleY:1.0565,y:359.6912},0).wait(1).to({scaleX:1.0569,scaleY:1.0569,y:359.691},0).wait(1).to({scaleX:1.0574,scaleY:1.0574,y:359.6909},0).wait(1).to({scaleX:1.0578,scaleY:1.0578,y:359.6907},0).wait(1).to({scaleX:1.0583,scaleY:1.0583,y:359.6905},0).wait(1).to({scaleX:1.0587,scaleY:1.0587,y:359.6904},0).wait(1).to({scaleX:1.0592,scaleY:1.0592,y:359.6902},0).wait(1).to({scaleX:1.0596,scaleY:1.0596,y:359.6901},0).wait(1).to({scaleX:1.0601,scaleY:1.0601,y:359.6899},0).wait(1).to({scaleX:1.0605,scaleY:1.0605,y:359.6898},0).wait(1).to({scaleX:1.061,scaleY:1.061,y:359.6896},0).wait(1).to({scaleX:1.0614,scaleY:1.0614,y:359.6894},0).wait(1).to({scaleX:1.0619,scaleY:1.0619,y:359.6893},0).wait(1).to({scaleX:1.0623,scaleY:1.0623,y:359.6891},0).wait(1).to({scaleX:1.0628,scaleY:1.0628,y:359.689},0).wait(1).to({scaleX:1.0632,scaleY:1.0632,y:359.6888},0).wait(1).to({scaleX:1.0637,scaleY:1.0637,y:359.6886},0).wait(1).to({scaleX:1.0641,scaleY:1.0641,y:359.6885},0).wait(1).to({scaleX:1.0646,scaleY:1.0646,y:359.6883},0).wait(1).to({scaleX:1.065,scaleY:1.065,y:359.6882},0).wait(1).to({scaleX:1.0655,scaleY:1.0655,y:359.688},0).wait(1).to({scaleX:1.0659,scaleY:1.0659,y:359.6879},0).wait(1).to({scaleX:1.0664,scaleY:1.0664,y:359.6877},0).wait(1).to({scaleX:1.0668,scaleY:1.0668,y:359.6875},0).wait(1).to({scaleX:1.0673,scaleY:1.0673,y:359.6874},0).wait(1).to({scaleX:1.0677,scaleY:1.0677,y:359.6872},0).wait(1).to({scaleX:1.0682,scaleY:1.0682,y:359.6871},0).wait(1).to({scaleX:1.0686,scaleY:1.0686,y:359.6869},0).wait(1).to({scaleX:1.0691,scaleY:1.0691,y:359.6868},0).wait(1).to({scaleX:1.0695,scaleY:1.0695,y:359.6866},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:359.6864},0).wait(1).to({scaleX:1.0704,scaleY:1.0704,y:359.6863},0).wait(1).to({scaleX:1.0709,scaleY:1.0709,y:359.6861},0).wait(1).to({scaleX:1.0313,scaleY:1.0313,y:360},0).to({_off:true},1).wait(140));

	// langit
	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({startPosition:0},0).to({_off:true},1).wait(140));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(490.2,309.3,1109.8,499.09999999999997);
// library properties:
lib.properties = {
	id: 'DEFCDFEFC09D1541BEF7C312DBC91C94',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/vis_novel01_atlas_1.png", id:"vis_novel01_atlas_1"},
		{src:"images/vis_novel01_atlas_2.png", id:"vis_novel01_atlas_2"},
		{src:"images/vis_novel01_atlas_3.png", id:"vis_novel01_atlas_3"},
		{src:"images/vis_novel01_atlas_4.png", id:"vis_novel01_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DEFCDFEFC09D1541BEF7C312DBC91C94'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;