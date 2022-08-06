const router = require("express").Router()

const User = require("../models/User");



// 更新
router.post("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      return res.status(200).json("success")
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json("情報を更新できません")
  }
})


// 削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("delete success");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("情報を削除できません");
  }
});


// 取得
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, email, ...other } = user._doc
      return res.status(200).json(other);
    } catch (err) {
      return res.status(500).json(err);
    }
});


// フォロー
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: {
            followers: req.body.userId,
          },
        })
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        })
        return res.status(200).json("follow success")
      } else {
        return res.status(403).json("Already followed!")
      }
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(500).json("can't follow yourself")
  }
})

// アンフォロー
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("unfollow success");
      } else {
        return res.status(403).json("Already unfollowed!");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("can't follow yourself");
  }
});



module.exports = router
