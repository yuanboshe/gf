// Copyright GoFrame Author(https://goframe.org). All Rights Reserved.
//
// This Source Code Form is subject to the terms of the MIT License.
// If a copy of the MIT was not distributed with this file,
// You can obtain one at https://github.com/gogf/gf.

package builtin

import (
	"errors"
	"strings"

	"github.com/gogf/gf/v2/util/gconv"
	"github.com/gogf/gf/v2/util/gutil"
)

// RuleRequiredIfAllEq implements `required-if-all-eq` rule:
// Required if all given field and its value are equal.
//
// Format:  required-if-all-eq:field,value,...
// Example: required-if-all-eq: id,1,age,18
type RuleRequiredIfAllEq struct{}

func init() {
	Register(RuleRequiredIfAllEq{})
}

func (r RuleRequiredIfAllEq) Name() string {
	return "required-if-all-eq"
}

func (r RuleRequiredIfAllEq) Message() string {
	return "The {field} field is required"
}

func (r RuleRequiredIfAllEq) Run(in RunInput) error {
	var (
		required   = true
		array      = strings.Split(in.RulePattern, ",")
		foundValue interface{}
		dataMap    = in.Data.Map()
	)
	// It supports multiple field and value pairs.
	if len(array)%2 == 0 {
		eqMap := make(map[string]bool)
		for i := 0; i < len(array); {
			tk := array[i]
			tv := array[i+1]
			var eq bool
			_, foundValue = gutil.MapPossibleItemByKey(dataMap, tk)
			if in.Option.CaseInsensitive {
				eq = strings.EqualFold(tv, gconv.String(foundValue))
			} else {
				eq = strings.Compare(tv, gconv.String(foundValue)) == 0
			}
			eqMap[tk] = eq
			if !eq {
				break
			}
			i += 2
		}
		for _, eq := range eqMap {
			if !eq {
				required = false
				break
			}
		}
	}

	if required && isRequiredEmpty(in.Value.Val()) {
		return errors.New(in.Message)
	}
	return nil
}