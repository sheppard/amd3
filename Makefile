LOCALE ?= en_US

GENERATED_FILES = \
	d3.js \
	d3.min.js \
	src/format/format-localized.js \
	src/time/format-localized.js \
	bower.json \
	component.json

all: $(GENERATED_FILES)

.PHONY: clean all test

test:
	@npm test

benchmark: all
	@node test/geo/benchmark.js

src/format/format-localized.js: bin/locale src/format/format-locale.js
	LC_NUMERIC=$(LOCALE) locale -ck LC_NUMERIC | bin/locale src/format/format-locale.js > $@

src/time/format-localized.js: bin/locale src/time/format-locale.js
	LC_TIME=$(LOCALE) locale -ck LC_TIME | bin/locale src/time/format-locale.js > $@

src/start.js: package.json bin/start
	bin/start > $@

src/base.js: package.json bin/base
	bin/base > $@

amd3.js: src/base.js src/format/format-localized.js src/time/format-localized.js package.json
	@rm -f $@
	bin/r.js -o name=d3 out=$@ baseUrl=src optimize=none

d3.js: src/base.js src/start.js src/format/format-localized.js src/time/format-localized.js package.json
	@rm -f $@.js
	bin/r.js -o name=d3 out=$@ baseUrl=src optimize=none pragmasOnSave.amd=true wrap.startFile=src/start.js wrap.endFile=src/end.js

d3.min.js: d3.js
	@rm -f $@
	bin/uglify $< > $@

amd3.min.js: amd3.js
	@rm -f $@
	bin/uglify $< > $@

%.json: bin/% package.json
	@rm -f $@
	bin/$* > $@
	@chmod a-w $@

clean:
	rm -f -- $(GENERATED_FILES)
