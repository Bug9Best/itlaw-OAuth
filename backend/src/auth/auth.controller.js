import express from "express";
const router = express.Router();

router.post("/loginCred", async (req, res) => {
  try {

    res.send("loginCred");
  } catch (e) {
    res.status(e.status || 500).json({ message: e.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    res.send("login");
  } catch (e) {
    res.status(e.status || 500).json({ message: e.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    res.send("register");
  } catch (e) {
    res.status(e.status || 500).json({ message: e.message });
  }
});

export default router;