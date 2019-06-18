import { Router } from "express";
import passport from "passport";
import secured from './secured'
import auth from "./auth";

const api = Router();

api.get("/", (req, res) => {
  res.status(200).json({
    name: "Lotos API",
    meta: {
      version: "1.0.0",
      status: "in dev"
    }
  });
});

api.use("/auth", auth);
api.use("/", passport.authenticate("jwt", { session: false }), secured);

export default api;