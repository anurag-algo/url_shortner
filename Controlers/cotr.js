import { nanoid } from "nanoid";
import URLModel from "../Models/url.js";

async function generateShortUrl(req, res) {
    console.log("REQ BODY:", req.body);

    const body = req.body;

    if (!body || !body.url) {
        return res.status(400).json({ error: "URL is required!" });
    }

    const shortId = nanoid(8);

    try {
        await URLModel.create({
            shortId,
            redirectUrl: body.url,
        });

        return res.status(201).json({ shortId });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong" });
    }
}

export default generateShortUrl;
