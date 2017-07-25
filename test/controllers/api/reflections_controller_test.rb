require 'test_helper'

class Api::ReflectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_reflections_create_url
    assert_response :success
  end

  test "should get index" do
    get api_reflections_index_url
    assert_response :success
  end

  test "should get show" do
    get api_reflections_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_reflections_destroy_url
    assert_response :success
  end

end
