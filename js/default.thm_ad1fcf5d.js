window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/mySkins/GameOverSceneSkin.exml'] = window.GameOverSceneSkin = (function (_super) {
	__extends(GameOverSceneSkin, _super);
	var GameOverSceneSkin$Skin1 = 	(function (_super) {
		__extends(GameOverSceneSkin$Skin1, _super);
		function GameOverSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "caidan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSceneSkin$Skin1;
	})(eui.Skin);

	var GameOverSceneSkin$Skin2 = 	(function (_super) {
		__extends(GameOverSceneSkin$Skin2, _super);
		function GameOverSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chonglai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSceneSkin$Skin2;
	})(eui.Skin);

	var GameOverSceneSkin$Skin3 = 	(function (_super) {
		__extends(GameOverSceneSkin$Skin3, _super);
		function GameOverSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSceneSkin$Skin3;
	})(eui.Skin);

	var GameOverSceneSkin$Skin4 = 	(function (_super) {
		__extends(GameOverSceneSkin$Skin4, _super);
		function GameOverSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSceneSkin$Skin4.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "kai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSceneSkin$Skin4;
	})(eui.Skin);

	function GameOverSceneSkin() {
		_super.call(this);
		this.skinParts = ["exml_backMenuBtn","exml_againBtn","exml_nextBtn","exml_soundBtn","exml_scoreShadowLab","exml_scoreLab","exml_playerScoreShadow","exml_playerScore","exml_completeShadow","exml_completeLab","exml_overGroup"];
		
		this.height = 480;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.exml_overGroup_i()];
	}
	var _proto = GameOverSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_overGroup_i = function () {
		var t = new eui.Group();
		this.exml_overGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.width = 900;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.exml_backMenuBtn_i(),this.exml_againBtn_i(),this.exml_nextBtn_i(),this._Image2_i(),this.exml_soundBtn_i(),this.exml_scoreShadowLab_i(),this.exml_scoreLab_i(),this.exml_playerScoreShadow_i(),this.exml_playerScore_i(),this.exml_completeShadow_i(),this.exml_completeLab_i()];
		return t;
	};
	_proto.exml_backMenuBtn_i = function () {
		var t = new eui.Button();
		this.exml_backMenuBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49;
		t.enabled = true;
		t.label = "";
		t.x = 227;
		t.y = 240.5;
		t.skinName = GameOverSceneSkin$Skin1;
		return t;
	};
	_proto.exml_againBtn_i = function () {
		var t = new eui.Button();
		this.exml_againBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49.5;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = GameOverSceneSkin$Skin2;
		return t;
	};
	_proto.exml_nextBtn_i = function () {
		var t = new eui.Button();
		this.exml_nextBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 45.5;
		t.enabled = true;
		t.label = "";
		t.x = 669.91;
		t.y = 232.5;
		t.skinName = GameOverSceneSkin$Skin3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 33.5;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0.5;
		t.source = "jiangbei_png";
		t.y = 353.29;
		return t;
	};
	_proto.exml_soundBtn_i = function () {
		var t = new eui.Button();
		this.exml_soundBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49.5;
		t.enabled = true;
		t.label = "";
		t.x = 766.63;
		t.y = 417.27;
		t.skinName = GameOverSceneSkin$Skin4;
		return t;
	};
	_proto.exml_scoreShadowLab_i = function () {
		var t = new eui.Label();
		this.exml_scoreShadowLab = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3a3a3a;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 254.65;
		t.y = 361.29;
		return t;
	};
	_proto.exml_scoreLab_i = function () {
		var t = new eui.Label();
		this.exml_scoreLab = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xa8c15b;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 260.98;
		t.y = 355.96;
		return t;
	};
	_proto.exml_playerScoreShadow_i = function () {
		var t = new eui.Label();
		this.exml_playerScoreShadow = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3a3a3a;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 647.3;
		t.y = 357.27;
		return t;
	};
	_proto.exml_playerScore_i = function () {
		var t = new eui.Label();
		this.exml_playerScore = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xa8c15b;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 653.63;
		t.y = 351.94;
		return t;
	};
	_proto.exml_completeShadow_i = function () {
		var t = new eui.Label();
		this.exml_completeShadow = t;
		t.anchorOffsetX = 300;
		t.anchorOffsetY = 44;
		t.height = 88;
		t.size = 60;
		t.text = "Level  10  Complete";
		t.textAlign = "center";
		t.textColor = 0x3a3a3a;
		t.verticalAlign = "middle";
		t.width = 600;
		t.x = 442.02;
		t.y = 90.47;
		return t;
	};
	_proto.exml_completeLab_i = function () {
		var t = new eui.Label();
		this.exml_completeLab = t;
		t.anchorOffsetX = 300;
		t.anchorOffsetY = 44;
		t.height = 88;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "Level  10  Complete";
		t.textAlign = "center";
		t.textColor = 0xa8c15b;
		t.verticalAlign = "middle";
		t.width = 600;
		t.y = 86.47;
		return t;
	};
	return GameOverSceneSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/HelpSceneSkin.exml'] = window.HelpSceneSkin = (function (_super) {
	__extends(HelpSceneSkin, _super);
	var HelpSceneSkin$Skin5 = 	(function (_super) {
		__extends(HelpSceneSkin$Skin5, _super);
		function HelpSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HelpSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnRES_json.caidan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HelpSceneSkin$Skin5;
	})(eui.Skin);

	function HelpSceneSkin() {
		_super.call(this);
		this.skinParts = ["exml_backMenuBtn"];
		
		this.height = 480;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = HelpSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bgRES_json.bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 384.61;
		t.width = 727.27;
		t.x = 86;
		t.y = 60;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Image2_i(),this.exml_backMenuBtn_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 110.31;
		t.size = 55;
		t.text = "将所有瓷砖推到与瓷砖颜色相同的空格中即可";
		t.textAlign = "left";
		t.textColor = 0xa8c15b;
		t.verticalAlign = "middle";
		t.width = 711.88;
		t.x = 52;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 169.39;
		t.size = 55;
		t.text = "当瓷砖走到白色三角    的位置时，瓷砖的移动方向改变为白色三角所指的方向";
		t.textColor = 0xa8c15b;
		t.width = 689.15;
		t.x = 52;
		t.y = 125.16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "npcRES_json.changeTriangle_png";
		t.x = 559;
		t.y = 129;
		return t;
	};
	_proto.exml_backMenuBtn_i = function () {
		var t = new eui.Button();
		this.exml_backMenuBtn = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 42;
		t.label = "";
		t.x = 684.27;
		t.y = 322.58;
		t.skinName = HelpSceneSkin$Skin5;
		return t;
	};
	return HelpSceneSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/LevelSceneSkin.exml'] = window.LevelSceneSkin = (function (_super) {
	__extends(LevelSceneSkin, _super);
	var LevelSceneSkin$Skin6 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin6, _super);
		function LevelSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin6.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "kai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin6;
	})(eui.Skin);

	var LevelSceneSkin$Skin7 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin7, _super);
		function LevelSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "caidan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin7;
	})(eui.Skin);

	function LevelSceneSkin() {
		_super.call(this);
		this.skinParts = ["exml_soundBtn","exml_backMenuBtn","exml_list1","exml_list2","exml_list3","exml_list4","exml_list5"];
		
		this.height = 480;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.exml_soundBtn_i(),this.exml_backMenuBtn_i(),this.exml_list1_i(),this.exml_list2_i(),this.exml_list3_i(),this.exml_list4_i(),this.exml_list5_i()];
	}
	var _proto = LevelSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_soundBtn_i = function () {
		var t = new eui.Button();
		this.exml_soundBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49.5;
		t.label = "";
		t.x = 798.73;
		t.y = 379.67;
		t.skinName = LevelSceneSkin$Skin6;
		return t;
	};
	_proto.exml_backMenuBtn_i = function () {
		var t = new eui.Button();
		this.exml_backMenuBtn = t;
		t.anchorOffsetX = 51.33;
		t.anchorOffsetY = 44;
		t.label = "";
		t.x = 83.33;
		t.y = 374.17;
		t.skinName = LevelSceneSkin$Skin7;
		return t;
	};
	_proto.exml_list1_i = function () {
		var t = new eui.List();
		this.exml_list1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 240;
		t.y = 40;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.exml_list2_i = function () {
		var t = new eui.List();
		this.exml_list2 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 320;
		t.y = 111.52;
		return t;
	};
	_proto.exml_list3_i = function () {
		var t = new eui.List();
		this.exml_list3 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 408;
		t.y = 183.67;
		return t;
	};
	_proto.exml_list4_i = function () {
		var t = new eui.List();
		this.exml_list4 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.width = 320;
		t.y = 255.63;
		return t;
	};
	_proto.exml_list5_i = function () {
		var t = new eui.List();
		this.exml_list5 = t;
		t.height = 80;
		t.width = 240;
		t.x = 330;
		t.y = 327.66;
		return t;
	};
	return LevelSceneSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/MainGameSceneSkin.exml'] = window.MainGameSceneSkin = (function (_super) {
	__extends(MainGameSceneSkin, _super);
	var MainGameSceneSkin$Skin8 = 	(function (_super) {
		__extends(MainGameSceneSkin$Skin8, _super);
		function MainGameSceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainGameSceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chehui_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainGameSceneSkin$Skin8;
	})(eui.Skin);

	var MainGameSceneSkin$Skin9 = 	(function (_super) {
		__extends(MainGameSceneSkin$Skin9, _super);
		function MainGameSceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainGameSceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chonglai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainGameSceneSkin$Skin9;
	})(eui.Skin);

	var MainGameSceneSkin$Skin10 = 	(function (_super) {
		__extends(MainGameSceneSkin$Skin10, _super);
		function MainGameSceneSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainGameSceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "caidan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainGameSceneSkin$Skin10;
	})(eui.Skin);

	var MainGameSceneSkin$Skin11 = 	(function (_super) {
		__extends(MainGameSceneSkin$Skin11, _super);
		function MainGameSceneSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainGameSceneSkin$Skin11.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "kai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainGameSceneSkin$Skin11;
	})(eui.Skin);

	function MainGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["exml_backBtn","exml_againBtn","exml_backMenuBtn","exml_soundBtn","exml_backShadowImg","exml_countShadowLab","exml_countDownLab","exml_scoreShadowLab","exml_playerScoreLab","exml_gameGroup"];
		
		this.height = 480;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.exml_gameGroup_i()];
	}
	var _proto = MainGameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_gameGroup_i = function () {
		var t = new eui.Group();
		this.exml_gameGroup = t;
		t.anchorOffsetX = 450;
		t.anchorOffsetY = 240;
		t.height = 480;
		t.width = 900;
		t.x = 450;
		t.y = 240;
		t.elementsContent = [this._Image2_i(),this.exml_backBtn_i(),this.exml_againBtn_i(),this.exml_backMenuBtn_i(),this.exml_soundBtn_i(),this.exml_backShadowImg_i(),this.exml_countShadowLab_i(),this.exml_countDownLab_i(),this.exml_scoreShadowLab_i(),this.exml_playerScoreLab_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiangbei_png";
		t.y = 10;
		return t;
	};
	_proto.exml_backBtn_i = function () {
		var t = new eui.Button();
		this.exml_backBtn = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 42;
		t.label = "";
		t.x = 127.78;
		t.y = 411.79;
		t.skinName = MainGameSceneSkin$Skin8;
		return t;
	};
	_proto.exml_againBtn_i = function () {
		var t = new eui.Button();
		this.exml_againBtn = t;
		t.anchorOffsetX = 46.67;
		t.anchorOffsetY = 47.99;
		t.label = "";
		t.x = 269.21;
		t.y = 418.78;
		t.skinName = MainGameSceneSkin$Skin9;
		return t;
	};
	_proto.exml_backMenuBtn_i = function () {
		var t = new eui.Button();
		this.exml_backMenuBtn = t;
		t.anchorOffsetX = 53.33;
		t.anchorOffsetY = 45.33;
		t.label = "";
		t.x = 655.33;
		t.y = 415.62;
		t.skinName = MainGameSceneSkin$Skin10;
		return t;
	};
	_proto.exml_soundBtn_i = function () {
		var t = new eui.Button();
		this.exml_soundBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49.5;
		t.label = "";
		t.x = 787;
		t.y = 420.59;
		t.skinName = MainGameSceneSkin$Skin11;
		return t;
	};
	_proto.exml_backShadowImg_i = function () {
		var t = new eui.Image();
		this.exml_backShadowImg = t;
		t.anchorOffsetX = 37.47;
		t.anchorOffsetY = 33.59;
		t.height = 74.07;
		t.rotation = 30.12;
		t.source = "shadow_png";
		t.width = 84.4;
		t.x = 124.55;
		t.y = 406.86;
		return t;
	};
	_proto.exml_countShadowLab_i = function () {
		var t = new eui.Label();
		this.exml_countShadowLab = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0x3a3a3a;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 280.96;
		t.y = 49;
		return t;
	};
	_proto.exml_countDownLab_i = function () {
		var t = new eui.Label();
		this.exml_countDownLab = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0xa8c15b;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 286.96;
		t.y = 45;
		return t;
	};
	_proto.exml_scoreShadowLab_i = function () {
		var t = new eui.Label();
		this.exml_scoreShadowLab = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3a3a3a;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 628.38;
		t.y = 49;
		return t;
	};
	_proto.exml_playerScoreLab_i = function () {
		var t = new eui.Label();
		this.exml_playerScoreLab = t;
		t.anchorOffsetX = 77.5;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.size = 60;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xa8c15b;
		t.verticalAlign = "middle";
		t.width = 155;
		t.x = 634.38;
		t.y = 45;
		return t;
	};
	return MainGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/MainMenuSceneSkin.exml'] = window.MainMenuSceneSkin = (function (_super) {
	__extends(MainMenuSceneSkin, _super);
	var MainMenuSceneSkin$Skin12 = 	(function (_super) {
		__extends(MainMenuSceneSkin$Skin12, _super);
		function MainMenuSceneSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainMenuSceneSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaishi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainMenuSceneSkin$Skin12;
	})(eui.Skin);

	var MainMenuSceneSkin$Skin13 = 	(function (_super) {
		__extends(MainMenuSceneSkin$Skin13, _super);
		function MainMenuSceneSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainMenuSceneSkin$Skin13.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.source = "kai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainMenuSceneSkin$Skin13;
	})(eui.Skin);

	var MainMenuSceneSkin$Skin14 = 	(function (_super) {
		__extends(MainMenuSceneSkin$Skin14, _super);
		function MainMenuSceneSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainMenuSceneSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "help_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return MainMenuSceneSkin$Skin14;
	})(eui.Skin);

	function MainMenuSceneSkin() {
		_super.call(this);
		this.skinParts = ["exml_startBtn","exml_soundBtn","exml_helpBtn","exml_menuGroup"];
		
		this.height = 480;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.exml_menuGroup_i()];
	}
	var _proto = MainMenuSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.exml_menuGroup_i = function () {
		var t = new eui.Group();
		this.exml_menuGroup = t;
		t.anchorOffsetX = 303.49;
		t.anchorOffsetY = 208.13;
		t.height = 397.33;
		t.horizontalCenter = 0;
		t.verticalCenter = 9.5;
		t.width = 630;
		t.elementsContent = [this._Image2_i(),this.exml_startBtn_i(),this.exml_soundBtn_i(),this.exml_helpBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.horizontalCenter = 0;
		t.source = "gameName_png";
		t.width = 372.54;
		t.y = 0;
		return t;
	};
	_proto.exml_startBtn_i = function () {
		var t = new eui.Button();
		this.exml_startBtn = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 83;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 249.36;
		t.skinName = MainMenuSceneSkin$Skin12;
		return t;
	};
	_proto.exml_soundBtn_i = function () {
		var t = new eui.Button();
		this.exml_soundBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49.5;
		t.label = "";
		t.x = 576;
		t.y = 345;
		t.skinName = MainMenuSceneSkin$Skin13;
		return t;
	};
	_proto.exml_helpBtn_i = function () {
		var t = new eui.Button();
		this.exml_helpBtn = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 44;
		t.label = "";
		t.x = 54;
		t.y = 345;
		t.skinName = MainMenuSceneSkin$Skin14;
		return t;
	};
	return MainMenuSceneSkin;
})(eui.Skin);generateEUI.paths['resource/mySkins/RendererSkin.exml'] = window.RendererSkin = (function (_super) {
	__extends(RendererSkin, _super);
	var RendererSkin$Skin15 = 	(function (_super) {
		__extends(RendererSkin$Skin15, _super);
		function RendererSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["iconDisplay","labelDisplay"];
			
			this.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("iconDisplay","percentWidth",70),
						new eui.SetProperty("iconDisplay","percentHeight",70)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RendererSkin$Skin15.prototype;

		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "level_1_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RendererSkin$Skin15;
	})(eui.Skin);

	function RendererSkin() {
		_super.call(this);
		this.skinParts = ["exml_levelBtn","exml_levelShadowIm"];
		
		this.height = 75;
		this.width = 75;
		this.elementsContent = [this.exml_levelBtn_i(),this.exml_levelShadowIm_i()];
	}
	var _proto = RendererSkin.prototype;

	_proto.exml_levelBtn_i = function () {
		var t = new eui.Button();
		this.exml_levelBtn = t;
		t.anchorOffsetX = 37.5;
		t.anchorOffsetY = 37.5;
		t.height = 75;
		t.label = "";
		t.width = 75;
		t.x = 37.5;
		t.y = 37.5;
		t.skinName = RendererSkin$Skin15;
		return t;
	};
	_proto.exml_levelShadowIm_i = function () {
		var t = new eui.Image();
		this.exml_levelShadowIm = t;
		t.alpha = 3;
		t.anchorOffsetX = 36.67;
		t.anchorOffsetY = 37.24;
		t.height = 73;
		t.rotation = 90.5;
		t.source = "shadow_png";
		t.width = 75;
		t.x = 39;
		t.y = 35;
		return t;
	};
	return RendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);