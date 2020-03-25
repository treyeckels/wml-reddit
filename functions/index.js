const admin = require('firebase-admin');
const functions = require('firebase-functions');
const fetch = require('node-fetch');
const cors = require('cors')({
  origin: true
});

admin.initializeApp();

/**
 * This particular endpoint was giving me CORS errors, although
 * it seems odd just 1 endpoint would do that -- and because
 * sometimes Chrome reports other network errors as CORS errors
 * it's possible there is really not a CORS issue with this
 * Reddit endpoint.
 *
 * Just in case, though, this server-side endpoint was created
 * to be a proxy for fetching the more children Reddit
 * endpoint, which returns all the rolled up comments for a
 * particular thread.
 */
exports.getChildren = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const link_id = req.query.link_id;
    const children = req.query.children;
    try {
      const redditResponse = await fetch(
        `https://www.reddit.com/api/morechildren?api_type=json&link_id=${link_id}&children=${children}`
      );
      const data = await redditResponse.json();
      res.status(200).json({
        data
      });
    } catch (e) {
      console.error(e);
      res.status(404).json({
        error: e.message
      });
    }
  });
});
