<template>
  <AuthLayout>
    <div class="mt-10">
      <h1 class="lg:text-5xl text-3xl text-center font-extrabold">
        Create Your Account
      </h1>
      <form action="" class="mt-12" @submit.prevent="($event) => register()">
        <div class="mt-4">
          <TextInput
            placeholder="Username"
            v-model:input="name"
            inputType="text"
            :error="errors && errors.name ? errors.name[0] : ''" />
        </div>
        <div class="mt-4">
          <TextInput
            placeholder="Email"
            v-model:input="email"
            inputType="email"
            :error="errors && errors.email ? errors.email[0] : ''" />
        </div>
        <div class="mt-4">
          <TextInput
            placeholder="Password"
            v-model:input="password"
            inputType="password"
            :error="errors && errors.password ? errors.password[0] : ''" />
        </div>
        <div class="mt-4">
          <TextInput
            placeholder="Confirm Password"
            v-model:input="confirmPassword"
            inputType="password" />
        </div>
        <div class="mt-10">
          <button
            class="rounded-full w-full p-3 font-bold"
            type="submit"
            :disabled="!name || !email || !password || !confirmPassword"
            :class="
              name && email && password && confirmPassword
                ? 'bg-[#8228D9] hover:bg-[#6c21b3] text-white'
                : 'bg-[#EFF0EB] text-[#A7AAA2]'
            ">
            Sign Up
          </button>
        </div>
      </form>

      <div class="text-[14px] text-center pt-12">
        Already have an account ?
        <NuxtLink to="/" class="text-[#8228D9]">Log In</NuxtLink>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from "~/layouts/AuthLayout.vue";

let name = ref(null);
let email = ref(null);
let password = ref(null);
let confirmPassword = ref(null);
let errors = ref(null);
</script>
