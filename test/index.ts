import { describe, it } from "mocha";
import { expect, use } from "chai";
import chaipromisy from "chai-as-promised";
import { getfeatured } from "../src/index";

use(chaipromisy);

describe("le Hai fn", () => {
   it("should say Haii", () => {
      void expect(getfeatured()).to.eventually.be.fulfilled;
   });
});
