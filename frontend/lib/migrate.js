// const db = require("./db");

// db.prepare(`ALTER TABLE variants ADD COLUMN description2 TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN description3 TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN discount INTEGER`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN serving_size TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN servings_per_container TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN calories TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN total_fat TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN saturated_fat TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN sodium TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN total_carbohydrate TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN dietary_fiber TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN protein TEXT`).run();
// db.prepare(`ALTER TABLE variants ADD COLUMN ingredients TEXT`).run();

// console.log("✅ all columns added");

const db = require("./db");
db.prepare("ALTER TABLE variants ADD COLUMN description2 TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN description3 TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN discount TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN servingSize TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN servingsPerContainer TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN calories TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN totalFat TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN saturatedFat TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN sodium TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN totalCarbohydrate TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN dietaryFiber TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN protein TEXT").run();
db.prepare("ALTER TABLE variants ADD COLUMN ingredients TEXT").run();
console.log("✅ all columns added");
