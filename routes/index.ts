const express = require("express");
const router = express.Router();

router.get("/student/:id", (req: any, res: any) => {
    console.log(req.params)
    if(req.params.id === '2') {
        res.status(200).send({
            success: 'true',
            student: "{\"id\":\"2\",\"firstName\":\"jhon\",\"lastName\":\"jhon\"}"
        });
    } else {
        res.status(400).send({
            success: 'false',
            message: 'Unsupported in MOCK student id'
        });
    }
});

router.get("/groups", (req: any, res: any) => {
    if(req.query.teacherId === '2') {
        res.status(200).send({
            success: 'true',
            groups: "{\"Groups\":[{\"Id\":\"123\",\"Name\":\"group name\",\"GroupType\":\"1\"},{\"Id\":\"123\",\"Name\":\"group" +
                " name 2\",\"GroupType\":\"2\"},{\"Id\":\"123\",\"Name\":\"group name 3\",\"GroupType\":\"1\"},{\"Id\":\"123\",\"N" +
            "ame\":\"group name 4\",\"GroupType\":\"2\"}]}"
        });
    } else {
        res.status(400).send({
            success: 'false',
            message: 'Unsupported in MOCK teacher id'
        });
    }
});

router.get("/teacher/:id", (req: any, res: any) => {
    if(req.query.teacherId === 2) {
        res.status(200).send({
            success: 'true',
            teacher: "{\"Id\":\"12332\",\"LastName\":\"Smith\",\"FirstName\":\"Jhon\",\"Email\":\"test@test.com\",\"Subject" +
            "s\":[{\"Id\":\"13\",\"Name\":\"Russian\"},{\"Id\":\"1\",\"Name\":\"English\"}]}"
        });
    } else {
        res.status(400).send({
            success: 'false',
            message: 'Unsupported in MOCK teacher id'
        });
    }
});

router.post("/getDashboard", (req: any, res: any) => {

    const dateFrom = new Date(req.body.dateFrom);
    const dateTo = new Date(req.body.dateTo);
    const dateNow = new Date();

    if(req.body.groupId === 2 && dateFrom < dateNow && dateTo > dateNow) {
        res.status(200).send({
            success: 'true',
            dashboard: "[{\"StudentId\":\"1\",\"StudentName\":\"Vasya Ivanov\",\"logs\":[{\"LogId\":\"1\",\"WasInClass\":true,\"Date\":" +
            "\"2014-06-25\"},{\"LogId\":\"2\",\"WasInClass\":true,\"Date\":\"2014-06-26\"},{\"LogId\":\"3\",\"WasInClass\":true" +
            ",\"Date\":\"2014-06-27\"},{\"LogId\":\"4\",\"WasInClass\":true,\"Date\":\"2014-06-28\"},{\"LogId\":\"5\",\"WasInC" +
            "lass\":true,\"Date\":\"2014-06-29\"},{\"LogId\":\"6\",\"WasInClass\":true,\"Date\":\"2014-06-30\"},{\"LogId\":\"7" +
            "\",\"WasInClass\":true,\"Date\":\"2014-06-31\"}]},{\"StudentId\":\"2\",\"StudentName\":\"Vasya Ivanov 2\",\"logs\":" +
            "[{\"LogId\":\"1\",\"WasInClass\":true,\"Date\":\"2014-06-25\"},{\"LogId\":\"2\",\"WasInClass\":true,\"Date\":\"2014" +
            "-06-26\"},{\"LogId\":\"3\",\"WasInClass\":true,\"Date\":\"2014-06-27\"},{\"LogId\":\"4\",\"WasInClass\":true,\"Dat" +
            "e\":\"2014-06-28\"},{\"LogId\":\"5\",\"WasInClass\":true,\"Date\":\"2014-06-29\"},{\"LogId\":\"6\",\"WasInClass\":t" +
            "rue,\"Date\":\"2014-06-30\"},{\"LogId\":\"7\",\"WasInClass\":true,\"Date\":\"2014-06-31\"}]},{\"StudentId\":\"3\",\"St" +
            "udentName\":\"Vasya Ivanov 3\",\"logs\":[{\"LogId\":\"1\",\"WasInClass\":true,\"Date\":\"2014-06-25\"},{\"Log" +
            "Id\":\"2\",\"WasInClass\":true,\"Date\":\"2014-06-26\"},{\"LogId\":\"3\",\"WasInClass\":true,\"Date\":\"2014-06" +
            "-27\"},{\"LogId\":\"4\",\"WasInClass\":true,\"Date\":\"2014-06-28\"},{\"LogId\":\"5\",\"WasInClass\":true,\"Dat" +
            "e\":\"2014-06-29\"},{\"LogId\":\"6\",\"WasInClass\":true,\"Date\":\"2014-06-30\"},{\"LogId\":\"7\",\"WasInCla" +
            "ss\":true,\"Date\":\"2014-06-31\"}]},{\"StudentId\":\"4\",\"StudentName\":\"Vasya Ivanov 4\",\"logs\":[{\"LogI" +
            "d\":\"1\",\"WasInClass\":true,\"Date\":\"2014-06-25\"},{\"LogId\":\"2\",\"WasInClass\":true,\"Date\":\"2014-06" +
            "-26\"},{\"LogId\":\"3\",\"WasInClass\":true,\"Date\":\"2014-06-27\"},{\"LogId\":\"4\",\"WasInClass\":true,\"Da" +
            "te\":\"2014-06-28\"},{\"LogId\":\"5\",\"WasInClass\":true,\"Date\":\"2014-06-29\"},{\"LogId\":\"6\",\"WasInCla" +
            "ss\":true,\"Date\":\"2014-06-30\"},{\"LogId\":\"7\",\"WasInClass\":true,\"Date\":\"2014-06-31\"}]},{\"StudentI" +
            "d\":\"5\",\"StudentName\":\"Vasya Ivanov 5\",\"logs\":[{\"LogId\":\"1\",\"WasInClass\":true,\"Date\":\"2014-06" +
            "-25\"},{\"LogId\":\"2\",\"WasInClass\":true,\"Date\":\"2014-06-26\"},{\"LogId\":\"3\",\"WasInClass\":true,\"Da" +
            "te\":\"2014-06-27\"},{\"LogId\":\"4\",\"WasInClass\":true,\"Date\":\"2014-06-28\"},{\"LogId\":\"5\",\"WasInCla" +
            "ss\":true,\"Date\":\"2014-06-29\"},{\"LogId\":\"6\",\"WasInClass\":true,\"Date\":\"2014-06-30\"},{\"LogId\":\"" +
            "7\",\"WasInClass\":true,\"Date\":\"2014-06-31\"}]},{\"StudentId\":\"6\",\"StudentName\":\"Vasya Ivanov 6\",\"log" +
            "s\":[{\"LogId\":\"1\",\"WasInClass\":true,\"Date\":\"2014-06-25\"},{\"LogId\":\"2\",\"WasInClass\":true,\"Da" +
            "te\":\"2014-06-26\"},{\"LogId\":\"3\",\"WasInClass\":true,\"Date\":\"2014-06-27\"},{\"LogId\":\"4\",\"WasInCla" +
            "ss\":true,\"Date\":\"2014-06-28\"},{\"LogId\":\"5\",\"WasInClass\":true,\"Date\":\"2014-06-29\"},{\"LogId\":\"6\",\"W" +
            "asInClass\":true,\"Date\":\"2014-06-30\"},{\"LogId\":\"7\",\"WasInClass\":true,\"Date\":\"2014-06-31\"}]}]"
        });
    } else {
        res.status(400).send({
            success: 'false',
            message: 'Duck, sorry.'
        });
    }
});

module.exports = router;
