import { defineConfig, devices } from '@playwright/test';

export  default defineConfig({
  testDir:'./tests',
  timeout:30000,
  retries:1,
  reporter:[['html'],['list'],["allure-playwright"]],
  use:{
    headless:true,
    screenshot:'only-on-failure',
    video:'retain-on-failure'
  }

})