/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { describe, it } from "mocha";
import { expect, use } from "chai";
import chaipromisy from "chai-as-promised";
import { getfeatured } from "../src/index";

use(chaipromisy);

describe("functions", () => {
   it("should get something from derpibooru", () => {
      expect(getfeatured()).to.eventually.be.fulfilled.and.fulfilled.with.arguments;
   });
   it("should get something from furbooru", () => {
      expect(getfeatured("furbooru.org")).to.eventually.be.fulfilled.and.fulfilled.with.arguments;
   });
});
