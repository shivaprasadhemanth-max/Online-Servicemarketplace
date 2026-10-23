req.session.userId = user.id;

req.session.save(err => {
  if (err) {
    return res.status(500).json({ error: "Could not save login session." });
  }

  return res.json({ user: safeUser(user) });
});
return res.status(201).json({ user: safeUser(user) });