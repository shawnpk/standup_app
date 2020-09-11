source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

gem 'rails', '~> 6.0.3', '>= 6.0.3.3'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # Custom
  gem "factory_bot_rails"
  gem 'capybara'
  gem 'rails-controller-testing'
  gem 'rspec-rails'
  gem 'simplecov', :require => false, :group => :test
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Custom
  gem 'foreman'
  gem 'letter_opener'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Custom
gem 'cancancan'
gem 'devise'
gem 'devise_invitable'
gem 'gravatar_image_tag'
gem 'immutable-struct'
gem 'local_time'
gem 'money-rails'
gem 'rack-cors', :require => 'rack/cors'
gem 'redis', '~> 4.0'
gem 'rolify'
gem 'sidekiq'
gem 'sinatra', require: nil
gem 'slack-notifier'