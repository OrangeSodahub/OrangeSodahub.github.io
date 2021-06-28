# SEARCH-WITH-ALGOLIA


## INTRODUCTION

### What makes Aloglia great?

- The goal of the JAMStack is eliminate server dependencies.
- Although Algolia is a bussiness solution, it offers a very generous free plan and performs up to 200 faster than open-source solutions like ElasticSearch.

### How Algolia works?

Algolia provides a REST API to query and update your search indices. All input and output is provided in JSON, making it extremely easy to use in frontend Javascript.

In order to create, update, and maintain an Algolia search index, you’ll need to generate a valid JSON array of all of the content in your Hugo site.

Here are the steps:

## The very first step with algolia.com

Sign up for [Algolia](https://www.algolia.com/) and it would built **index**, you should give it a name and remember it. What's more, find the pagelink **API keys** in the dashboard. You will see some sets of numbers and characters and remember them: **Application ID**, **Search-Only** **API key** and **Admin API key**.

## Generate your Hugo search index

### Config the **config.toml**

To get started with Algolia, the very first thing you'll need to do is sign up. Once that is out of the way, your next step is to generate your JSON search index.

Open up **config.toml** in your root directory and add the Hugo configuration for your custom output formats:

```
[outputs]
	home = ["HTML","RSS",...,"Algolia"]
	
[outputFormats.Algolia]
	baseName = "algolia"
	isPlainText = true
	mediaType = "application/json"
	notAlternative = true

[params.algolia]
	appId = "your Application ID"
 	indexName = "your index name"
 	searchOnlyKey = "your Search-Only API Key
 	vars = ["title", "summary", "date", "publishdate", "expirydate", "permalink"]
	params = ["categories", "tags"]
```

> Attention: Do not let the last member "Aloglia" in "[outputs]" leave out or there will not generate the index you want.

Fill the blanks with information you just get: appId, indexName and searchOnlyKey.

In **[outputFormats.Algolia]**:

- **baseName** tells the output format how to look for the Hugo layout for this output format
- **isPlainText** tells the output format to use GoLang’s plain text parser for the layout, preventing some automatic HTML formatting from ruining your JSON
- **mediaType** tells the output format what kind of file to output.
- **notAlternative** tells the output format not to be included when looping over the .AlternativeOutputFormats [page variable](https://gohugo.io/variables/page/#page-variables).

In **[params.algolia]**:

- **vars** sets the [page variables](https://gohugo.io/variables/page/) in which you want included in your index.
- **params** sets the [custom page params](https://gohugo.io/variables/page/#page-level-params) in which you want included in your index

> Attemtion: Look out the format of your file: config.XXX. Is it a .toml file or a .yaml file? Please switch the linguistic form according to it.

If yours is **.yaml** but not **.toml** then they are:

```
outputFormats:
  Algolia:
    baseName: algolia
    isPlainText: true
    mediaType: application/json
    notAlternative: true

outputs:
  home:
  - ...
  - algolia
```

The rest of contents are similar to the first form.

### Create the JSON template

To provide Hugo with the JSON template for your custom output format, create a new json file: **list.algolia.json** in **layout/_default**. It will contain the following contents:

```
{{/* Generates a valid Algolia search index */}}
{{- $.Scratch.Add "index" slice -}}
{{- $section := $.Site.GetPage "section" .Section }}
{{- range .Site.AllPages -}}
  {{- if or (and (.IsDescendant $section) (and (not .Draft) (not .Params.private))) $section.IsHome -}}
    {{- $.Scratch.Add "index" (dict "objectID" .UniqueID "date" .Date.UTC.Unix "description" .Description "dir" .Dir "expirydate" .ExpiryDate.UTC.Unix "fuzzywordcount" .FuzzyWordCount "keywords" .Keywords "kind" .Kind "lang" .Lang "lastmod" .Lastmod.UTC.Unix "permalink" .Permalink "publishdate" .PublishDate "readingtime" .ReadingTime "relpermalink" .RelPermalink "summary" .Summary "title" .Title "type" .Type "url" .URL "weight" .Weight "wordcount" .WordCount "section" .Section "tags" .Params.Tags "categories" .Params.Categories "authors" .Params.Authors)}}
  {{- end -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
```

or just:

```
[
  {{- range $index, $entry := .Data.Pages }}
  {{- if $index }}, {{ end }}
  {
    "id": "{{ .Permalink | relURL }}",
    "url": "{{ .Permalink | relURL }}",
    "title": {{ .Title | jsonify }},
    "date_published": {{ .Date.Format "2006-01-02T15:04:05Z07:00" | jsonify }}
  }
  {{- end }}
]
```

Then run **hugo** command, a new file **algolia.json** will be soon generated under the **public** directory. If it looks like what I say this step is accomplished.

## Send the index to Alolia

You can send the index you just create to your Aloglia account server so that Aloglia could search key words according to the contents. Two methods: mannually and automatically.

### Mannually commit

Back to your Aloglia account page and find **Indices** in the sidebar, click the **Upload record(s)** button of it and upload the file **algolia.json**. Once you upload successfully the website supports the search soon.

### Automatically commit

I have not figured it out yet.








