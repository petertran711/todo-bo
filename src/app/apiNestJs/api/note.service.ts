/**
 * Todo example
 * The amazing API framework
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CreateManyNoteEntityDto } from '../model/createManyNoteEntityDto';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { NoteEntity } from '../model/noteEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NoteService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create many NoteEntity
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerCreateManyBase(body: CreateManyNoteEntityDto, observe?: 'body', reportProgress?: boolean): Observable<Array<NoteEntity>>;
    public noteControllerCreateManyBase(body: CreateManyNoteEntityDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<NoteEntity>>>;
    public noteControllerCreateManyBase(body: CreateManyNoteEntityDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<NoteEntity>>>;
    public noteControllerCreateManyBase(body: CreateManyNoteEntityDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling noteControllerCreateManyBase.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Array<NoteEntity>>('post',`${this.basePath}/note/bulk`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create one NoteEntity
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerCreateOneBase(body: NoteEntity, observe?: 'body', reportProgress?: boolean): Observable<NoteEntity>;
    public noteControllerCreateOneBase(body: NoteEntity, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoteEntity>>;
    public noteControllerCreateOneBase(body: NoteEntity, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoteEntity>>;
    public noteControllerCreateOneBase(body: NoteEntity, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling noteControllerCreateOneBase.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<NoteEntity>('post',`${this.basePath}/note`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete one NoteEntity
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerDeleteOneBase(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public noteControllerDeleteOneBase(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public noteControllerDeleteOneBase(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public noteControllerDeleteOneBase(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling noteControllerDeleteOneBase.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/note/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve many NoteEntity
     * 
     * @param fields Selects resource fields. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#select\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param s Adds search condition. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#search\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param filter Adds filter condition. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#filter\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param or Adds OR condition. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#or\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param sort Adds sort by field. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#sort\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param join Adds relational resources. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#join\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param limit Limit amount of resources. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#limit\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param offset Offset amount of resources. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#offset\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param page Page portion of resources. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#page\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param cache Reset cache (if was enabled). &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#cache\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerGetManyBase(fields?: Array<string>, s?: string, filter?: Array<string>, or?: Array<string>, sort?: Array<string>, join?: Array<string>, limit?: number, offset?: number, page?: number, cache?: number, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse2002>;
    public noteControllerGetManyBase(fields?: Array<string>, s?: string, filter?: Array<string>, or?: Array<string>, sort?: Array<string>, join?: Array<string>, limit?: number, offset?: number, page?: number, cache?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse2002>>;
    public noteControllerGetManyBase(fields?: Array<string>, s?: string, filter?: Array<string>, or?: Array<string>, sort?: Array<string>, join?: Array<string>, limit?: number, offset?: number, page?: number, cache?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse2002>>;
    public noteControllerGetManyBase(fields?: Array<string>, s?: string, filter?: Array<string>, or?: Array<string>, sort?: Array<string>, join?: Array<string>, limit?: number, offset?: number, page?: number, cache?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {











        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fields) {
            queryParameters = queryParameters.set('fields', fields.join(COLLECTION_FORMATS['csv']));
        }
        if (s !== undefined && s !== null) {
            queryParameters = queryParameters.set('s', <any>s);
        }
        if (filter) {
            filter.forEach((element) => {
                queryParameters = queryParameters.append('filter', <any>element);
            })
        }
        if (or) {
            or.forEach((element) => {
                queryParameters = queryParameters.append('or', <any>element);
            })
        }
        if (sort) {
            sort.forEach((element) => {
                queryParameters = queryParameters.append('sort', <any>element);
            })
        }
        if (join) {
            join.forEach((element) => {
                queryParameters = queryParameters.append('join', <any>element);
            })
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (cache !== undefined && cache !== null) {
            queryParameters = queryParameters.set('cache', <any>cache);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<InlineResponse2002>('get',`${this.basePath}/note`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve one NoteEntity
     * 
     * @param id 
     * @param fields Selects resource fields. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#select\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param join Adds relational resources. &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#join\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param cache Reset cache (if was enabled). &lt;a href&#x3D;\&quot;https://github.com/nestjsx/crud/wiki/Requests#cache\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Docs&lt;/a&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerGetOneBase(id: number, fields?: Array<string>, join?: Array<string>, cache?: number, observe?: 'body', reportProgress?: boolean): Observable<NoteEntity>;
    public noteControllerGetOneBase(id: number, fields?: Array<string>, join?: Array<string>, cache?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoteEntity>>;
    public noteControllerGetOneBase(id: number, fields?: Array<string>, join?: Array<string>, cache?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoteEntity>>;
    public noteControllerGetOneBase(id: number, fields?: Array<string>, join?: Array<string>, cache?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling noteControllerGetOneBase.');
        }




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (fields) {
            queryParameters = queryParameters.set('fields', fields.join(COLLECTION_FORMATS['csv']));
        }
        if (join) {
            join.forEach((element) => {
                queryParameters = queryParameters.append('join', <any>element);
            })
        }
        if (cache !== undefined && cache !== null) {
            queryParameters = queryParameters.set('cache', <any>cache);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<NoteEntity>('get',`${this.basePath}/note/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replace one NoteEntity
     * 
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerReplaceOneBase(body: NoteEntity, id: number, observe?: 'body', reportProgress?: boolean): Observable<NoteEntity>;
    public noteControllerReplaceOneBase(body: NoteEntity, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoteEntity>>;
    public noteControllerReplaceOneBase(body: NoteEntity, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoteEntity>>;
    public noteControllerReplaceOneBase(body: NoteEntity, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling noteControllerReplaceOneBase.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling noteControllerReplaceOneBase.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<NoteEntity>('put',`${this.basePath}/note/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update one NoteEntity
     * 
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public noteControllerUpdateOneBase(body: NoteEntity, id: number, observe?: 'body', reportProgress?: boolean): Observable<NoteEntity>;
    public noteControllerUpdateOneBase(body: NoteEntity, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NoteEntity>>;
    public noteControllerUpdateOneBase(body: NoteEntity, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NoteEntity>>;
    public noteControllerUpdateOneBase(body: NoteEntity, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling noteControllerUpdateOneBase.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling noteControllerUpdateOneBase.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<NoteEntity>('patch',`${this.basePath}/note/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
