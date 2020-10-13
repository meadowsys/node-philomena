import { describe, it } from "mocha";
import { sayhi } from "../src/index";
import { expect, use } from "chai";
import chaipromisy from "chai-as-promised";

use(chaipromisy);

describe("le Hai fn", () => {
   it("should say Haii", () => {
      expect(sayhi()).to.equal("Haii");
   });
});
