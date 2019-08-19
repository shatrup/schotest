import JsonHelper from "../utils/JsonHelper";
import Resources from "../utils/Resources";

class SchoolPageModel {

    getAboutSchool() {
        var result = {
        };
        var jsonPath = Resources.internal.json.schooldetails;
        var jsonObj = JsonHelper.shared.getJsonObjectAsync(jsonPath);
        // return JsonHelper.shared.getJsonObjectAsync(jsonPath).then(school => {
        //     result.schooldetail = school.data.schooldetail;

        var schooldetail = jsonObj.data.schooldetails;
        result.schooldetail = schooldetail;
        return result;
    }



    getData() {
        var result = {};
        var promises = [
            this.getAboutSchool()
        ];
        return Promise.all(promises).then(response => {
            response.forEach(entry => {
                for (var key in entry) {
                    if (entry.hasOwnProperty(key)) {
                        result[key] = entry[key];
                    }
                }
            });

            return result;
        });
    }
}

export default SchoolPageModel;