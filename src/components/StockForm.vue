<template>
  <form>
    <v-text-field
      v-model="article"
      :error-messages="articleErrors"
      :counter="10"
      label="Artículo"
      required
      @input="$v.article.$touch()"
      @blur="$v.article.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="price"
      :error-messages="priceErrors"
      label="Precio"
      required
      @input="$v.price.$touch()"
      @blur="$v.price.$touch()"
    ></v-text-field>

    <v-select
      v-model="payMethod"
      :items="payMethods"
      :error-messages="paymentErrors"
      label="Método de pago"
      required
      @change="$v.payMethod.$touch()"
      @blur="$v.payMethod.$touch()"
    ></v-select>

    <v-select
      v-model="fees"
      :items="fees"
      :error-messages="feesErrors"
      label="Cuotas"
      required
      @change="$v.fees.$touch()"
      @blur="$v.fees.$touch()"
    ></v-select>

    <v-select
      v-model="category"
      :items="categories"
      :error-messages="categoryErrors"
      label="Categoría"
      required
      @change="$v.category.$touch()"
      @blur="$v.category.$touch()"
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Alertar al equipo sobre esta modificación."
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">Agregar stock</v-btn>
    <v-btn @click="clear">Limpiar</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    article: { required, maxLength: maxLength(20) },
    price: { required },
    payMethod: { required },
    fees: { required },
    category: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    article: "",
    price: "",
    category: null,
    categories: ["Item 1", "Item 2", "Item 3", "Item 4"],
    fees: ["Item 1", "Item 2", "Item 3", "Item 4"],
    payMethods: ["Item 1", "Item 2", "Item 3", "Item 4"],
    payMethod: null,
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    categoryErrors() {
      const errors = [];
      if (!this.$v.category.$dirty) return errors;
      !this.$v.category.required &&
        errors.push("Es necesario ingresar una categoría.");
      return errors;
    },
    articleErrors() {
      const errors = [];
      if (!this.$v.article.$dirty) return errors;
      !this.$v.article.maxLength &&
        errors.push("El nombre del artículo debe tener menos de 20 caracteres");
      !this.$v.article.required &&
        errors.push("Es necesario ingresar un artículo.");
      return errors;
    },
    priceErrors() {
      const errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push("Es necesario ingresar un valor.");
      return errors;
    },
    paymentErrors() {
      const errors = [];
      if (!this.$v.payMethod.$dirty) return errors;
      !this.$v.payMethod.required &&
        errors.push("Es necesario ingresar un método de pago.");
      return errors;
    },
    feesErrors() {
      const errors = [];
      if (!this.$v.fees.$dirty) return errors;
      !this.$v.fees.required && errors.push("Es necesario ingresar un valor.");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.article = "";
      this.price = "";
      this.categories = '';
      this.payMethods = '';
      this.fees = '';
      this.checkbox = false;
    }
  }
};
</script>
