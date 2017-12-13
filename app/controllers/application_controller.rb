# App controller includes http auth token methods
class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods
end
