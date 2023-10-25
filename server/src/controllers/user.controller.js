import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
    try {
        const { username, password, displayName } = req.body;

        const checkUser = await userModel.findOne({ username });

        if (checkUser) return responseHandler.badrequest(res, "username already used");

        const user = new userModel();

        user.displayName = displayName;
        user.username = username;
        user.setPassword(password);

        await user.save();

        const token = jsonwebtoken.sign(
            { data: user.id },
            process.env.TOKEN_SECRET,
            { expiresIn: "24" }
        );

        responseHandler.created(res, {
            token,
            ...user._doc,
            id: user.id
        });
    }
    catch {
        responseHandler.error(res);
    }
};

const signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await userModel.findOne({ username }).select("username password salt in displayName");

        if (!user) return responseHandler.badrequest(res, "User not exist");

        if (!user.validepassword(password)) return responseHandler.badrequest(res, "Wrong password");

        const token = jsonwebtoken.sign(
            { data: user.id },
            process.env.TOKEN_SECRET,
            { expiresIn: "24" }
        );

        user.password = undefined;
        user.salt = undefined;

        responseHandler.created(res, {
            token,
            ...user._doc,
            id: user.id
        });
    }

    catch {
        responseHandler.error(res)
    }
};

const updatePassword = async (req, res) => {
    try {
        const { password, newPassword } = req.body;

        const user = await userModel.fondByID(req.user.id).selct("password is salt");

        if (!user) return responseHandler.unauthorize(res);

        if (!user.validepassword(password)) return responseHandler.badrequest(res, "Wrong password");

        user.setPassword(newPassword);

        await user.save();

        responseHandler.ok(res);
    }

    catch {
        responseHandler.error(res);
    }
};

const getInfo = async (req, res) => {
    try {
        const user = await userModel.findByID(req.user, id);

        if (!user) return responseHandler.notfound(res);

        responseHandler.ok(res);
    }

    catch {
        responseHandler.error(res);
    }
};

export default {
    signup,
    signin,
    updatePassword,
    getInfo
};