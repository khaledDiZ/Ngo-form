import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: 20,
    width: 200,
    direction: "rtl"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class TextFields extends React.Component {
  adressRef = React.createRef();
  orgNameArRef = React.createRef();
  orgNameEnRef = React.createRef();
  orgSpecRef = React.createRef();
  emailRef = React.createRef();
  orgAdressRef = React.createRef();
  mangerNameRef = React.createRef();
  orgCountryRef = React.createRef();
  mangerEmailRef = React.createRef();
  phoneRef = React.createRef();
  orgCoRef = React.createRef();
  orgCoAdressRef = React.createRef();
  nationalteRef = React.createRef();
  confirmDocRef = React.createRef();
  passportRef = React.createRef();
  activitesRef = React.createRef();
  systemRef = React.createRef();
  reportRef = React.createRef();

  submitForm = event => {
    event.preventDefault();
    const form = {
      adress: this.adressRef.current.value,
      orgNameAr: this.orgNameArRef.current.value,
      orgNameEn: this.orgNameEnRef.current.value,
      orgSpec: this.orgSpecRef.current.value,
      email: this.emailRef.current.value,
      orgAdress: this.orgAdressRef.current.value,
      mangerName: this.mangerNameRef.current.value,
      orgCountry: this.orgCountryRef.current.value,
      mangerEmail: this.mangerEmailRef.current.value,
      phone: this.phoneRef.current.value,
      orgCo: this.orgCoRef.current.value,
      orgCoAdress: this.orgCoAdressRef.current.value,
      nationalte: this.nationalteRef.current.value,
      confirmDoc: this.confirmDocRef.current.value,
      passport: this.passportRef.current.value,
      activites: this.activitesRef.current.value,
      system: this.systemRef.current.value,
      report: this.reportRef.current.value
    };
    this.props.addForm(form);
    this.props.history.push("/submited");
  };
  render() {
    const { classes } = this.props;

    return (
      <form
        className="container"
        noValidate
        autoComplete="off"
        onSubmit={this.submitForm}
      >
        <div className="org-info">
          <h3> معلومات المنظمة في العراق</h3>
          <TextField
            id="name"
            name="adress"
            ref={this.adressRef}
            label="عنوان مكتب الفرع الرئيسي في العراق"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="text"
            name="orgNameAr"
            ref={this.orgNameArRef}
            label="اسم المنظمة باللغة العربية"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="text"
            name="orgNameEn"
            ref={this.orgNameEnRef}
            label="اسم المنظمة باللغة الانكليزية"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="text"
            name="orgSpec"
            ref={this.orgSpecRef}
            label="اختصاص المنظمة"
            className={classes.textField}
            margin="normal"
          />
          <hr />
        </div>
        <div>
          <h3> معلومات خاصة بالمنظمة الام</h3>

          <TextField
            id="text"
            name="email"
            ref={this.emailRef}
            label="البريد الالكتروني"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="orgAdress"
            ref={this.orgAdressRef}
            label="عنوان المنظمة"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="mangerName"
            ref={this.mangerNameRef}
            label="اسم رئيس المنظمة / المدير التنفيذي"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="orgCountry"
            ref={this.orgCountryRef}
            label="جنسية المنظمة"
            className={classes.textField}
            margin="normal"
          />
          <hr />
        </div>
        <div>
          <h3>معلومات رئيس المنظمة</h3>
          <TextField
            id="text"
            name="mangerEmail"
            ref={this.mangerEmailRef}
            label="البريد الالكتروني"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="phone"
            ref={this.phoneRef}
            label="رقم الهاتف"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="orgCo"
            ref={this.orgCoRef}
            label="اسم رئيس فرع المنظمة المخول"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="orgCoAdress"
            ref={this.orgCoAdressRef}
            label="عنوان السكن"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="text"
            name="nationalte"
            ref={this.nationalteRef}
            label="الجنسية"
            className={classes.textField}
            margin="normal"
          />
          <hr />
        </div>
        <div className="docs">
          <h3>الوثائق</h3>
          <div className="uplaod">
            <input
              accept="image/*"
              name="confirmDoc"
              ref={this.confirmDocRef}
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            وثيقة مصدقة تؤيد كون المنظمة الاجنبية الأم مسجلة في بلدها كمنظمة غير
            حكومية وغير ربحية *
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                رفع
              </Button>
            </label>
          </div>
          <div className="uplaod">
            <input
              name="passport"
              ref={this.passportRef}
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            صور عن جواز السفر النافذ ووثيقة الاقامة أو سمة الدخول لرئيس فرع
            المنظمة *
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                رفع
              </Button>
            </label>
          </div>
          <div className="uplaod">
            <input
              name="activites"
              ref={this.activitesRef}
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            بيان مفصل بالنشاطات التي يسعى فرع المنظمة الاجنبية تنفيذها في العراق
            *
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                رفع
              </Button>
            </label>
          </div>
          <div className="uplaod">
            <input
              name="system"
              ref={this.systemRef}
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            النظام الداخلي للمنظمة *
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                رفع
              </Button>
            </label>
          </div>
          <div className="uplaod">
            <input
              name="report"
              ref={this.reportRef}
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            تقرير عن نشاطات المنظمة الام خارج العراق *
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                رفع
              </Button>
            </label>
          </div>
          <hr />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          تسجيل
        </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
