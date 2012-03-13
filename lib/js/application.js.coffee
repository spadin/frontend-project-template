class Greeter
  constructor: (@name = "World") ->
    @greetingTemplate = JST["templates/greeting"]
  print: =>
    $("body").html @greetingTemplate(name: @name)

$ ->
  greeter = new Greeter "Bingo"
  greeter.print()