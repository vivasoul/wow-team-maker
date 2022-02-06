var ins_data = {
	"otherside"	: { image: "de-other-side.jpg", name: "저-편" },
	"atonement"	: { image: "halls-of-atonement.jpg", name: "속죄의 전당" },
	"tirna"			: { image: "mists-of-tirna-scithe.jpg", name: "티르너사이드의 안개" },
	"plague"		: { image: "plaguefall.jpg", name: "역병 몰락지" },
	"sanguine"	: { image: "sanguine-depths.jpg", name: "핏빛 심연" },
	"ascension"	: { image: "spires-of-ascension.jpg", name: "승천의 첨탑" },
	"theater"		: { image: "theater-of-pain.jpg", name: "고통의 투기장" },
	"necrotic"	: { image: "the-necrotic-wake.jpg", name: "죽음의 상흔" }
};
var cov_data = {
	"kyrian"		: { image: "ui_sigil_kyrian.jpg", "name": "키리안", clazz: "cov-kyrian" },
	"necrolord"	: { image: "ui_sigil_necrolord.jpg", "name": "강령술사", clazz: "cov-necrolord" },
	"nightfae"	: { image: "ui_sigil_nightfae.jpg", "name": "나이트페이", clazz: "cov-nightfae" },
	"venthyr"		: { image: "ui_sigil_venthyr.jpg", "name": "벤티트", clazz: "cov-venthyr" }
};
var cls_data = {
	"death_knight"	: {
		image: "death_knight/죽음의기사.png",
		name: "죽기",
		clazz: "job-death_knight",
		specializations: [
      { image: "death_knight/혈기.jpg", role: "T", name: "혈죽", clazz: "spec-death_knight-1", portrait: "death_knight/classes-death-knight-blood.jpg" },
			{ image: "death_knight/냉기.jpg", role: "D", name: "냉죽", clazz: "spec-death_knight-2", portrait: "death_knight/classes-death-knight-frost.jpg" },
			{ image: "death_knight/부정.jpg", role: "D", name: "부죽", clazz: "spec-death_knight-3", portrait: "death_knight/classes-death-knight-unholy.jpg" }
		]
	},
	"demon_hunter"	: {
		image: "demon_hunter/악마사냥꾼.png",
		name: "악사",
		clazz: "job-demon_hunter",
		specializations: [
			{ image: "demon_hunter/복수.jpg", role: "T", name: "악탱", clazz: "spec-demon_hunter-1", portrait: "demon_hunter/classes-demon-hunter-vengeance.jpg" },
			{ image: "demon_hunter/파멸.jpg", role: "D", name: "악딜", clazz: "spec-demon_hunter-2", portrait: "demon_hunter/classes-demon-hunter-havoc.jpg" }
		]
	},
	"druid"	: {
		image: "druid/드루이드.png",
		name: "드루",
		clazz: "job-druid",
		specializations: [
			{ image: "druid/수호.jpg", role: "T", name: "수드", clazz: "spec-druid-1", portrait: "druid/classes-druid-guardian.jpg" },
			{ image: "druid/야성.jpg", role: "D", name: "야드", clazz: "spec-druid-2", portrait: "druid/classes-druid-feral.jpg" },
			{ image: "druid/조화.jpg", role: "D", name: "조드", clazz: "spec-druid-3", portrait: "druid/classes-druid-balance.jpg" },
			{ image: "druid/회복.jpg", role: "H", name: "회드", clazz: "spec-druid-4", portrait: "druid/classes-druid-restoration.jpg" }
		]
	},
	"hunter"	: {
		image: "hunter/사냥꾼.png",
		name: "사냥꾼",
		clazz: "job-hunter",
		specializations: [
			{ image: "hunter/사격.jpg", role: "D", name: "격냥", clazz: "spec-hunter-1", portrait: "hunter/classes-hunter-marksmanship.jpg" },
			{ image: "hunter/생존.jpg", role: "D", name: "생냥", clazz: "spec-hunter-2", portrait: "hunter/classes-hunter-survival.jpg" },
			{ image: "hunter/야수.jpg", role: "D", name: "야냥", clazz: "spec-hunter-3", portrait: "hunter/classes-hunter-beast-mastery.jpg" }
		]
	},
	"mage"	: {
		image: "mage/마법사.png",
		name: "마법사",
		clazz: "job-mage",
		specializations: [
			{ image: "mage/냉기.jpg", role: "D", name: "냉법", clazz: "spec-mage-1", portrait: "mage/classes-mage-frost.jpg" },
			{ image: "mage/비전.jpg", role: "D", name: "비법", clazz: "spec-mage-2", portrait: "mage/classes-mage-arcane.jpg" },
			{ image: "mage/화염.jpg", role: "D", name: "화법", clazz: "spec-mage-3", portrait: "mage/classes-mage-fire.jpg" }
		]
	},
	"monk"	: {
		image: "monk/수도사.png",
		name: "수도사",
		clazz: "job-monk",
		specializations: [
			{ image: "monk/양조.jpg", role: "T", name: "양조", clazz: "spec-monk-1", portrait: "monk/classes-monk-brewmaster.jpg" },
			{ image: "monk/풍운.jpg", role: "D", name: "풍운", clazz: "spec-monk-2", portrait: "monk/classes-monk-windwalker.jpg" },
      { image: "monk/운무.jpg", role: "H", name: "운무", clazz: "spec-monk-3", portrait: "monk/classes-monk-mistweaver.jpg" }
		]
	},
	"paladin"	: {
		image: "paladin/성기사.png",
		name: "성기사",
		clazz: "job-paladin",
		specializations: [
			{ image: "paladin/보호.jpg", role: "T", name: "보기", clazz: "spec-paladin-1", portrait: "paladin/classes-paladin-protection.jpg" },
			{ image: "paladin/징벌.jpg", role: "D", name: "징기", clazz: "spec-paladin-2", portrait: "paladin/classes-paladin-retribution.jpg" },
      { image: "paladin/신성.jpg", role: "H", name: "신기", clazz: "spec-paladin-3", portrait: "paladin/classes-paladin-holy.jpg" }
		]
	},
	"priest"	: {
		image: "priest/사제.png",
		name: "사제",
		clazz: "job-priest",
		specializations: [
      { image: "priest/암흑.jpg", role: "D", name: "암사", clazz: "spec-priest-1", portrait: "priest/classes-priest-shadow.jpg" },
			{ image: "priest/수양.jpg", role: "H", name: "수사", clazz: "spec-priest-2", portrait: "priest/classes-priest-discipline.jpg" },
			{ image: "priest/신성.jpg", role: "H", name: "신사", clazz: "spec-priest-3", portrait: "priest/classes-priest-holy.jpg" }
		]
	},
	"rogue"	: {
		image: "rogue/도적.png",
		name: "도적",
		clazz: "job-rogue",
		specializations: [
			{ image: "rogue/무법.jpg", role: "D", name: "무법", clazz: "spec-rogue-1", portrait: "rogue/classes-rogue-outlaw.jpg" },
			{ image: "rogue/암살.jpg", role: "D", name: "암살", clazz: "spec-rogue-2", portrait: "rogue/classes-rogue-assassination.jpg" },
			{ image: "rogue/잠행.jpg", role: "D", name: "잠행", clazz: "spec-rogue-3", portrait: "rogue/classes-rogue-subtlety.jpg" }
		]
	},
	"shaman"	: {
		image: "shaman/주술사.png",
		name: "주술사",
		clazz: "job-shaman",
		specializations: [
			{ image: "shaman/고양.jpg", role: "D", name: "고술", clazz: "spec-shaman-1", portrait: "shaman/classes-shaman-enhancement.jpg" },
			{ image: "shaman/정기.jpg", role: "D", name: "정술", clazz: "spec-shaman-2", portrait: "shaman/classes-shaman-elemental.jpg" },
			{ image: "shaman/복원.jpg", role: "H", name: "복술", clazz: "spec-shaman-3", portrait: "shaman/classes-shaman-restoration.jpg" }
		]
	},
	"warlock"	: {
		image: "warlock/흑마법사.png",
		name: "흑마",
		clazz: "job-warlock",
		specializations: [
			{ image: "warlock/고통.jpg", role: "D", name: "고흑", clazz: "spec-warlock-1", portrait: "warlock/classes-warlock-affliction.jpg" },
			{ image: "warlock/악마.jpg", role: "D", name: "악흑", clazz: "spec-warlock-2", portrait: "warlock/classes-warlock-demonology.jpg" },
			{ image: "warlock/파괴.jpg", role: "D", name: "파흑", clazz: "spec-warlock-3", portrait: "warlock/classes-warlock-destruction.jpg" }
		]
	},
	"worrior"	: {
		image: "worrior/전사.png",
		name: "전사",
		clazz: "job-worrior",
		specializations: [
			{ image: "worrior/방어.jpg", role: "T", name: "방전", clazz: "spec-worrior-1", portrait: "worrior/classes-warrior-protection.jpg" },
			{ image: "worrior/무기.jpg", role: "D", name: "무전", clazz: "spec-worrior-2", portrait: "worrior/classes-warrior-arms.jpg" },
			{ image: "worrior/분노.jpg", role: "D", name: "분전", clazz: "spec-worrior-3", portrait: "worrior/classes-warrior-fury.jpg" }
		]
	}
};

var dropSequences = [
  { id: "team-A-ban-1", desc: "탱커밴(선공)", team:"A" },
  { id: "team-B-ban-1", desc: "탱커밴(후공)", team:"B" },
  { id: "team-A-pick-1", desc: "탱커픽(선공)", team:"A" },
  { id: "team-B-pick-1", desc: "탱커픽(후공)", team:"B" },
  { id: "team-B-ban-2", desc: "딜러밴1(후공)", team:"B" },
  { id: "team-A-ban-2", desc: "딜러밴1(선공)", team:"A" },
  { id: "team-A-ban-3", desc: "딜러밴2(선공)", team:"A" },
  { id: "team-B-ban-3", desc: "딜러밴2(후공)", team:"B" },
  { id: "team-B-ban-4", desc: "딜러밴3(후공)", team:"B" },
  { id: "team-A-ban-4", desc: "딜러밴3(선공)", team:"A" },
  { id: "team-B-pick-2", desc: "딜러픽1(후공)", team:"B" },
  { id: "team-A-pick-2", desc: "딜러픽1(선공)", team:"A" },
  { id: "team-A-pick-3", desc: "딜러픽2(선공)", team:"A" },
  { id: "team-B-pick-3", desc: "딜러픽2(후공)", team:"B" },
  { id: "team-B-pick-4", desc: "딜러픽3(후공)", team:"B" },
  { id: "team-A-pick-4", desc: "딜러픽3(선공)", team:"A" },
  { id: "team-B-ban-5", desc: "힐러밴(후공)", team:"B" },
  { id: "team-A-ban-5", desc: "힐러밴(선공)", team:"A" },
  { id: "team-B-pick-5", desc: "힐러픽(후공)", team:"B" },
  { id: "team-A-pick-5", desc: "힐러픽(선공)", team:"A" }
];
