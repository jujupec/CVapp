// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform.js";

import { AppModule } from "./modules/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);