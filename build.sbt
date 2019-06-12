name := """practice"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.8"

libraryDependencies += guice
libraryDependencies ++= Seq(
  javaWs
)
libraryDependencies += "com.google.code.gson" % "gson" % "2.8.0"

