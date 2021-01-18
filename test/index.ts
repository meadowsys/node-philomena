/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { describe, it } from "mocha";
import { expect, use } from "chai";
import chaipromisy from "chai-as-promised";
// import { getfeatured } from "../src/index";
import { createClient } from "..";
import { Domains, version } from "..";

use(chaipromisy);

// describe("functions", () => {
//    it("should get something from derpibooru", () => {
//       return expect(getfeatured()).to.eventually.be.fulfilled;
//    });
//    it("should get something from furbooru", () => {
//       return expect(getfeatured("furbooru.org")).to.eventually.be.fulfilled;
//    });
// });

describe("other package-level stuff", function() {

   it("should get its version", function() {
      return expect(version).to.not.equal("unknown");
   });

});

describe("client", function() {
   const client = createClient({ domain: Domains.DERPIBOORU });

   it("should use the right domain", function() {
      return expect(client).to.have.property("domain").that.equals(Domains.DERPIBOORU);
   });

   it("should fetch the featured image correctly", function() {
      return expect(client.getFeatured())
         .to.eventually.be.fulfilled
         .and.have.property("image")
         .that.has.property("upvotes")
         .that.is.greaterThan(0);
   });
});
