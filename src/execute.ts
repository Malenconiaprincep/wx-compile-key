import {cmdPrompt} from './cmdPrompt';
import wxChmod from './wxChmod';
import {exposeCompileShortcut} from './exposeShortcut';
import findPort from './findPort';
import getExpressTpl from '../tpl/index';

export const execute = async function () {
    const path = await cmdPrompt();
    try {
        await wxChmod(path);
        const port = await findPort();
        const appendScriptStr = getExpressTpl(port);
        const isSuccess = await exposeCompileShortcut(path, appendScriptStr);
        if (isSuccess) {
            console.info(`添加自动编译成功`);
        }
    } catch (err) {
        console.info(err);
    }
};